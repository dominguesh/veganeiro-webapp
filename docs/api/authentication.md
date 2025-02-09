## Authentication

### Login

```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "token": "string",
  "user": {
    "id": "string",
    "email": "string",
    "name": "string"
  }
}
```

### Register

```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "email": "string",
  "password": "string",
  "name": "string"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "user": {
    "id": "string",
    "email": "string",
    "name": "string"
  }
}
```