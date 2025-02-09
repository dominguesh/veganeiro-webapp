# Users API

## Overview

The Users API allows you to manage user profiles, preferences, and settings.

## Endpoints

### Get Current User

```http
GET /users/me
```

Get the currently authenticated user's profile.

#### Response
```json
{
  "data": {
    "user": {
      "id": "string",
      "email": "string",
      "name": "string",
      "preferences": {
        "language": "pt|en",
        "theme": "light|dark",
        "notifications": {
          "email": boolean,
          "push": boolean
        }
      },
      "createdAt": "datetime",
      "updatedAt": "datetime"
    }
  }
}
```

### Update User Profile

```http
PATCH /users/me
```

Update the current user's profile information.

#### Request Body
```json
{
  "name": "string",
  "preferences": {
    "language": "pt|en",
    "theme": "light|dark",
    "notifications": {
      "email": boolean,
      "push": boolean
    }
  }
}
```

#### Response
```json
{
  "data": {
    "user": {
      "id": "string",
      "email": "string",
      "name": "string",
      "preferences": {
        "language": "pt|en",
        "theme": "light|dark",
        "notifications": {
          "email": boolean,
          "push": boolean
        }
      },
      "updatedAt": "datetime"
    }
  }
}
```

### Change Password

```http
POST /users/me/password
```

Change the current user's password.

#### Request Body
```json
{
  "currentPassword": "string",
  "newPassword": "string"
}
```

#### Response
```json
{
  "data": {
    "message": "Password updated successfully"
  }
}
```

### Delete Account

```http
DELETE /users/me
```

Delete the current user's account.

#### Request Body
```json
{
  "password": "string"
}
```

#### Response
```json
{
  "data": {
    "message": "Account deleted successfully"
  }
}
```
