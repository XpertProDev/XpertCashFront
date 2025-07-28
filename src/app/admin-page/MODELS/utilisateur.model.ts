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
    photo? : string;
    photoUrl? : string;
    
    assignedAt? : string;

    constructor(
        id?: number,
        nomComplet?: string, email?: string, password?: string, phone?: string,
        pays?: string, nomEntreprise?: string,enabledLien?: string, photo?: string, photoUrl?: string,
        assignedAt?: string
    ) {
        this.id = id;
        this.nomComplet = nomComplet;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.pays = pays;
        this.nomEntreprise = nomEntreprise;
        this.enabledLien = enabledLien
        this.photo = photo;
        this.photoUrl = photoUrl
        this.assignedAt = assignedAt

    }
}
