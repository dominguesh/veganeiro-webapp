# Recipes API

## Overview

The Recipes API provides endpoints for managing vegan and vegetarian recipes, including creation, search, and management features.

## Endpoints

### List Recipes

```http
GET /recipes
```

Get a paginated list of recipes.

#### Query Parameters
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)
- `category` (optional): Filter by category
- `difficulty` (optional): Filter by difficulty level
- `search` (optional): Search term

#### Response
```json
{
  "data": {
    "recipes": [
      {
        "id": "string",
        "title": "string",
        "description": "string",
        "ingredients": [
          {
            "name": "string",
            "amount": "number",
            "unit": "string"
          }
        ],
        "instructions": ["string"],
        "cookingTime": "number",
        "difficulty": "easy|medium|hard",
        "servings": "number",
        "nutrition": {
          "calories": "number",
          "protein": "number",
          "carbs": "number",
          "fat": "number"
        },
        "author": {
          "id": "string",
          "name": "string"
        },
        "createdAt": "datetime",
        "updatedAt": "datetime"
      }
    ]
  },
  "meta": {
    "currentPage": "number",
    "totalPages": "number",
    "totalItems": "number"
  }
}
```

### Create Recipe

```http
POST /recipes
```

Create a new recipe.

#### Request Body
```json
{
  "title": "string",
  "description": "string",
  "ingredients": [
    {
      "name": "string",
      "amount": "number",
      "unit": "string"
    }
  ],
  "instructions": ["string"],
  "cookingTime": "number",
  "difficulty": "easy|medium|hard",
  "servings": "number",
  "nutrition": {
    "calories": "number",
    "protein": "number",
    "carbs": "number",
    "fat": "number"
  }
}
```

#### Response
```json
{
  "data": {
    "recipe": {
      "id": "string",
      "title": "string",
      // ... same as recipe object above
    }
  }
}
```

### Get Recipe

```http
GET /recipes/{id}
```

Get a specific recipe by ID.

#### Response
```json
{
  "data": {
    "recipe": {
      "id": "string",
      "title": "string",
      // ... same as recipe object above
    }
  }
}
```

### Update Recipe

```http
PUT /recipes/{id}
```

Update an existing recipe.

#### Request Body
```json
{
  // Same as create recipe body
}
```

#### Response
```json
{
  "data": {
    "recipe": {
      "id": "string",
      "title": "string",
      // ... same as recipe object above
    }
  }
}
```

### Delete Recipe

```http
DELETE /recipes/{id}
```

Delete a recipe.

#### Response
```json
{
  "data": {
    "message": "Recipe deleted successfully"
  }
}
```

### Favorite Recipe

```http
POST /recipes/{id}/favorite
```

Add a recipe to user's favorites.

#### Response
```json
{
  "data": {
    "message": "Recipe added to favorites"
  }
}
```

### Rate Recipe

```http
POST /recipes/{id}/rate
```

Rate a recipe.

#### Request Body
```json
{
  "rating": "number", // 1-5
  "comment": "string"
}
```

#### Response
```json
{
  "data": {
    "rating": {
      "id": "string",
      "rating": "number",
      "comment": "string",
      "user": {
        "id": "string",
        "name": "string"
      },
      "createdAt": "datetime"
    }
  }
}
```