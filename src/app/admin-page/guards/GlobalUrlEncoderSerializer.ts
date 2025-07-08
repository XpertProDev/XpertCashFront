import { DefaultUrlSerializer, UrlTree, UrlSerializer } from '@angular/router';

export class GlobalUrlEncoderSerializer implements UrlSerializer {
  private readonly defaultSerializer = new DefaultUrlSerializer();
  private readonly ENCODED_PREFIX = 't_';

  // Liste des chemins où on encode l'ID numérique
  private readonly TARGET_PATHS = [
    'detail-boutique',
    'detail-produit',
    'detail-client',
    'detail-stock',
    'facture-proforma-details',
    'userPermission',
    'facture-reel-details'
  ];

  parse(url: string): UrlTree {
    const [baseUrl, fragment] = url.split('#');
    const [path, queryParams] = baseUrl.split('?');

    const decodedPath = path.split('/')
      .map((segment, index, segments) => this.decodeSegmentIfNeeded(segment, segments, index))
      .join('/');

    const decodedQuery = queryParams 
      ? queryParams.split('&')
          .map(param => {
            const [key, value] = param.split('=');
            return [
              this.decodeSimple(key),
              value ? this.decodeSimple(value) : ''
            ].join('=');
          })
          .join('&')
      : undefined;

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
      .map((segment, index, segments) => this.encodeSegmentIfNeeded(segment, segments, index))
      .join('/');

    const encodedQuery = queryParams
      ? queryParams.split('&')
          .map(param => {
            const [key, value] = param.split('=');
            return [
              this.encodeSimple(key),
              value ? this.encodeSimple(value) : ''
            ].join('=');
          })
          .join('&')
      : undefined;

    let fullUrl = encodedPath;
    if (encodedQuery) fullUrl += `?${encodedQuery}`;
    if (fragment) fullUrl += `#${fragment}`;

    return fullUrl;
  }

  private decodeSegmentIfNeeded(segment: string, segments: string[], index: number): string {
    if (!segment?.startsWith(this.ENCODED_PREFIX)) return segment;

    const encodedContent = segment.substring(this.ENCODED_PREFIX.length);
    
    try {
      return decodeURIComponent(atob(encodedContent));
    } catch {
      return segment;
    }
  }

  private encodeSegmentIfNeeded(segment: string, segments: string[], index: number): string {
    if (!segment) return segment;

    // On cible uniquement l'ID qui suit un chemin spécifique
    if (index > 0 && this.TARGET_PATHS.includes(segments[index - 1]) && /^\d+$/.test(segment)) {
      return `${this.ENCODED_PREFIX}${btoa(encodeURIComponent(segment))}`;
    }
    
    return segment;
  }

  private encodeSimple(value: string): string {
    return value;
  }

  private decodeSimple(value: string): string {
    return value;
  }
}
