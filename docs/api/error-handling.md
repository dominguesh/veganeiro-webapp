# Error Handling

## Error Response Format

All API errors follow this format:

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": {}
  },
  "data": null,
  "meta": {}
}
```

## Error Codes

### Authentication Errors (AUTH_*)
- `AUTH_001`: Invalid credentials
- `AUTH_002`: Email already exists
- `AUTH_003`: Invalid token
- `AUTH_004`: Token expired
- `AUTH_005`: Invalid reset token

### Validation Errors (VAL_*)
- `VAL_001`: Invalid input data
- `VAL_002`: Required field missing
- `VAL_003`: Invalid email format
- `VAL_004`: Password too weak

### Resource Errors (RES_*)
- `RES_001`: Resource not found
- `RES_002`: Resource already exists
- `RES_003`: Resource access denied

### Server Errors (SRV_*)
- `SRV_001`: Internal server error
- `SRV_002`: Service unavailable
- `SRV_003`: Database error

## HTTP Status Codes

- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `422`: Unprocessable Entity
- `429`: Too Many Requests
- `500`: Internal Server Error
- `503`: Service Unavailable