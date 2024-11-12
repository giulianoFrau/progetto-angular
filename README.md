# CorsoAngular

Per fare una pagina di errore specifico:
nell'array delle rotte creare una pagina 404 con un componente {path:'/404', component: MIO_COMPONENTE},
dopo di che, subito sotto creare un altro oggetto con {path:'\*\*', redirectTo:'/404'}.. questo farà si che quando non viene trovato un url mi reindirizza alla mia pagina 404 personalizzata
