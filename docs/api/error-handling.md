## Error Handling

All endpoints follow this error format:

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": {}
  }
}
```

Common error codes:
- `AUTH_001`: Invalid credentials
- `AUTH_002`: Email already exists
- `VAL_001`: Validation error