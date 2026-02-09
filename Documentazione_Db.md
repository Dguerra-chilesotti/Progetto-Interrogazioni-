# DOCUMENTAZIONE



## Entità individuate : 
- Studente
- Voti (ogni studente può avere più voti ma un voto può essere dato solo ad uno studente)1:N
- Classi (uno studente può avere solo una classe , ma una classe può avere più studenti)1:n
- Giro

## Relazioni individuate : 


- Studente :
	- nome  varchar 20
	- cognome varchar 20
	- matricola int pk
	- id_classe int autoincrement  fk from Classi

- Voti :
	- id_voto int autoincrement pk
	- matricola int fk from Studente 
	- id_giro int autoincrement fk from Giro
	- valutazione enum   

- Giro :
	id_giro  int autoincrement pk
	num_giro int 
	id_classe int autoincrement fk from Classi

- Classi :
	- id_classe int autoincrement pk
	- num_classe int 
	- sezione_classe (enum / varchar 5?)