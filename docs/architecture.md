# Arquitectura de UMESUserAlbums

```mermaid
flowchart LR
  Users[UsersPage\nListado y buscador] -->|GET /users| UsersService[UsersService]
  UsersService --> API[(JSONPlaceholder REST API)]
  Users -->|/albums/:userId| Albums[AlbumsPage\nÁlbumes del usuario]
  Albums -->|GET /albums?userId| AlbumsService[AlbumsService]
  AlbumsService --> API
  Albums -->|seleccionar álbum| Modal[DetailphotosComponent\nion-modal]
  Modal -->|GET /photos?albumId| AlbumsService
  Users --> UserCard[DetailusersComponent]
  Albums --> AlbumCard[DetailalbumsComponent]
```

Las páginas gestionan navegación y estados de presentación. Los servicios concentran todas
las solicitudes HTTP y los componentes reutilizables reciben datos mediante `@Input` y
comunican acciones mediante `@Output`.