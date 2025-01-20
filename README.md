# Backend API Documentation

## `api/users/register` Endpoint

### Description

Register a new user by creating a user account with the provided information

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
    - `firstname` (string, required): User's first name (minimum 3 characters).
    - `lastname` (string, required): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password  (minimum 6 character).

### Example Response

- `user` (object):
    - `fullname` (object):
        - `firstname` (string, required): User's first name (minimum 3 characters).
        - `lastname` (string, required): User's last name (minimum 3 characters).
    - `email` (string, required): User's email address (must be a valid email).
    - `password` (string, required): User's password  (minimum 6 character).

- `token` (string) : JWT.token


## `api//users/login` Endpoint

### Description

Authenticates a user using their email and password , returing a JWT token upon success

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:


- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password  (minimum 6 character).

### Example Response

- `user` (object):
    - `fullname` (object):
        - `firstname` (string, required): User's first name (minimum 3 characters).
        - `lastname` (string, required): User's last name (minimum 3 characters).
    - `email` (string, required): User's email address (must be a valid email).
    - `password` (string, required): User's password  (minimum 6 character).

- `token` (string) : JWT.token

