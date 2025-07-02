export class Users {
    id?: number;
    nomComplet?: string;
    email?: string;
    password?: string;
    phone?: string;
    pays?: string;
    nomEntreprise?: string;
    confirmPassword: any;
    enabledLien? : string;
    

    constructor(
        id?: number,
        nomComplet?: string, email?: string, password?: string, phone?: string,
        pays?: string, nomEntreprise?: string,enabledLien?: string
    ) {
        this.id = id;
        this.nomComplet = nomComplet;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.pays = pays;
        this.nomEntreprise = nomEntreprise;
        this.enabledLien = enabledLien
    }
}
