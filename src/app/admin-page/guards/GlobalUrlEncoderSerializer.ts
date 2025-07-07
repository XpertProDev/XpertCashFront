import { DefaultUrlSerializer, UrlTree, UrlSerializer } from '@angular/router';

export class GlobalUrlEncoderSerializer implements UrlSerializer {
  private defaultSerializer = new DefaultUrlSerializer();

  parse(url: string): UrlTree {
    // Décodage de chaque segment de l'URL
    const decodedUrl = url.split('/').map(segment => {
      try {
        return atob(segment);
      } catch {
        return segment;
      }
    }).join('/');

    return this.defaultSerializer.parse(decodedUrl);
  }

  serialize(tree: UrlTree): string {
    const rawUrl = this.defaultSerializer.serialize(tree);

    // Encodage de chaque segment (chemin et params)
    const encodedUrl = rawUrl.split('/').map(segment => {
      if (!segment) return '';
      return btoa(segment);
    }).join('/');

    return encodedUrl;
  }
}
