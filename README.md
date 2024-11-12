# CorsoAngular

# Per fare una pagina di errore specifico:

nell'array delle rotte creare una pagina 404 con un componente {path:'/404', component: MIO_COMPONENTE},
dopo di che, subito sotto creare un altro oggetto con {path:'\*\*', redirectTo:'/404'}.. questo farà si che quando non viene trovato un url mi reindirizza alla mia pagina 404 personalizzata

# Form dinamico gestito da js e non da html

Aggiungere REACTIVEFORMSMODULE agli import di app.module.ts
nel ts: aggiungere homeform:FormGroup

nella ngOnInit:
this.homeform= new FormGroup({
nome:new FormControl(Validators.required) // il primo parametro se voglio un valore di default
email:new FormControl(null, [Validators.required,Validators.email])
colore:new FormControl()
})

nell html

<form [formGroup]="homeform" (ngSubmit)="onSubmit()"></form>
nei vari <input> va aggiunto l'attributo formControlName="nome"
