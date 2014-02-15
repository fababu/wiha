user
register: POST /api/users
login: POST /api/login
logout: GET /api/logout
edit yourself: PUT /api/users
delete: DELETE /api/user/{id}
get: GET /api/user/{id}
search: GET /api/user?email=xx

follow: GET /api/user/{id}/follow
unfollow: GET /api/user/{id}/unfollow


wishkezelés
get for user: GET /api/user/{id}/wish
get: GET /api/user/{id}/wish/{id}
add: POST /api/user/{id}/wish
  saját usernek --> normális
edit: PUT /api/user/{id}/wish/{id}
  a saját usernek minden,
  másnak pipa


recommendation:
create: POST /api/user/{id}/recommend
edit: PUT /api/user/{id}/recommend/{id}
remove: DELETE /api/user/{id}/recommend/{id}
get: /api/user/{id}/recommend/{id}
get all: GET /api/user/{id}/recommend

convert to wish: GET /api/user/{id}/recommend/{id}/towish
