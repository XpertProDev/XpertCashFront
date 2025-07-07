import { DefaultUrlSerializer, UrlTree, UrlSerializer } from '@angular/router';


export class GlobalUrlEncoderSerializer implements UrlSerializer {
  private readonly defaultSerializer = new DefaultUrlSerializer();
  private readonly ENCODED_PREFIX = 't_';

  // Expressions régulières pour identifier les segments à encoder
  private readonly ENCODING_RULES = [
    /^[0-9]+$/,
    /^[a-f0-9]{24}$/i,
    /^(auth|token|session|key)/i,
    /[A-Z0-9]{8,}/i
  ];

  parse(url: string): UrlTree {
    const [baseUrl, fragment] = url.split('#');
    const [path, queryParams] = baseUrl.split('?');

    const decodedPath = path.split('/')
      .map(segment => this.decodeSegmentIfNeeded(segment))
      .join('/');

    const decodedQuery = queryParams 
      ? queryParams.split('&')
          .map(param => {
            const [key, value] = param.split('=');
            return [
              this.decodeSegmentIfNeeded(key),
              value ? this.decodeSegmentIfNeeded(value) : ''
            ].join('=');
          })
          .join('&')
      : undefined;

    // Reconstruction de l'URL
    let fullUrl = decodedPath;
    if (decodedQuery) fullUrl += `?${decodedQuery}`;
    if (fragment) fullUrl += `#${fragment}`;

    return this.defaultSerializer.parse(fullUrl);
  }

  serialize(tree: UrlTree): string {
    const rawUrl = this.defaultSerializer.serialize(tree);
    const [baseUrl, fragment] = rawUrl.split('#');
    const [path, queryParams] = baseUrl.split('?');

    const encodedPath = path.split('/')
      .map(segment => this.encodeSegmentIfNeeded(segment))
      .join('/');

    const encodedQuery = queryParams
      ? queryParams.split('&')
          .map(param => {
            const [key, value] = param.split('=');
            return [
              this.encodeSegmentIfNeeded(key),
              value ? this.encodeSegmentIfNeeded(value) : ''
            ].join('=');
          })
          .join('&')
      : undefined;

    // Reconstruction de l'URL encodée
    let fullUrl = encodedPath;
    if (encodedQuery) fullUrl += `?${encodedQuery}`;
    if (fragment) fullUrl += `#${fragment}`;

    return fullUrl;
  }


  private decodeSegmentIfNeeded(segment: string): string {
    if (!segment?.startsWith(this.ENCODED_PREFIX)) return segment;

    const encodedContent = segment.substring(this.ENCODED_PREFIX.length);
    
    if (!this.isValidBase64(encodedContent)) return segment;

    try {
      return decodeURIComponent(atob(encodedContent));
    } catch {
      return segment;
    }
  }

  private encodeSegmentIfNeeded(segment: string): string {
    if (!segment || !this.shouldEncodeSegment(segment)) return segment;

    try {
      return `${this.ENCODED_PREFIX}${btoa(encodeURIComponent(segment))}`;
    } catch {
      return segment;
    }
  }

  private shouldEncodeSegment(segment: string): boolean {
    return this.ENCODING_RULES.some(rule => rule.test(segment));
  }

    private isValidBase64(str: string): boolean {
    return /^[A-Za-z0-9_-]+={0,2}$/.test(str.replace(/[-_]/g, '')) && 
            str.replace(/[-_]/g, '').length % 4 === 0;
    }
}