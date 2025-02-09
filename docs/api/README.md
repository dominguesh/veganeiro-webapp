# Veganeiro API Documentation

## Overview

The Veganeiro API is organized around REST. Our API accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

## Base URL

```
https://api.veganeiro.org/v1
```

## Authentication

All API requests require authentication. See [authentication.md](./authentication.md) for details.

## Rate Limiting

- 100 requests per minute per IP
- 1000 requests per hour per user

## Response Format

All responses follow this format:

```json
{
  "data": {},      // Response data
  "meta": {},      // Metadata (pagination, etc.)
  "error": null    // Error information if applicable
}
```

## Available Endpoints

- [Authentication](./authentication.md)
- [Users](./users.md)
- [Recipes](./recipes.md)
- [Health Tracking](./health.md)

## Error Handling

See [error-handling.md](./error-handling.md) for detailed error codes and handling.