// export class TruncateEmailPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateEmail'
})
export class TruncateEmailPipe implements PipeTransform {
  transform(email: string | null | undefined): string {
    if (!email) {
      return 'Non renseigné';
    }
    const parts = email.split('@');
    if (parts.length !== 2) {
      // si ce n'est pas un email valide, on renvoie brut
      return email;
    }
    const [local, domain] = parts;
    if (local.length <= 6) {
      // si la partie locale est courte, on ne tronque pas
      return email;
    }
    const first = local.substring(0, 4);
    const last = local.substring(local.length - 2);
    return `${first}...${last}@${domain}`;
  }
}
