# Health Tracking API

## Overview

The Health Tracking API enables users to monitor their health metrics, including nutrition, water intake, and fasting periods.

## Endpoints

### Nutrition Tracking

#### Log Nutrition Entry

```http
POST /health/nutrition
```

Log a nutrition entry for the day.

##### Request Body
```json
{
  "date": "date",
  "meals": [
    {
      "type": "breakfast|lunch|dinner|snack",
      "foods": [
        {
          "name": "string",
          "amount": "number",
          "unit": "string",
          "nutrition": {
            "calories": "number",
            "protein": "number",
            "carbs": "number",
            "fat": "number",
            "fiber": "number"
          }
        }
      ]
    }
  ]
}
```

##### Response
```json
{
  "data": {
    "nutritionLog": {
      "id": "string",
      "date": "date",
      "meals": [...],
      "totals": {
        "calories": "number",
        "protein": "number",
        "carbs": "number",
        "fat": "number",
        "fiber": "number"
      }
    }
  }
}
```

#### Get Nutrition History

```http
GET /health/nutrition
```

Get nutrition history for a date range.

##### Query Parameters
- `startDate`: Start date (YYYY-MM-DD)
- `endDate`: End date (YYYY-MM-DD)

##### Response
```json
{
  "data": {
    "logs": [
      {
        "id": "string",
        "date": "date",
        "meals": [...],
        "totals": {...}
      }
    ]
  },
  "meta": {
    "totalDays": "number"
  }
}
```

### Water Tracking

#### Log Water Intake

```http
POST /health/water
```

Log water intake for the day.

##### Request Body
```json
{
  "date": "date",
  "amount": "number", // in milliliters
  "time": "datetime"
}
```

##### Response
```json
{
  "data": {
    "waterLog": {
      "id": "string",
      "date": "date",
      "amount": "number",
      "time": "datetime"
    }
  }
}
```

#### Get Water Intake History

```http
GET /health/water
```

Get water intake history.

##### Query Parameters
- `startDate`: Start date (YYYY-MM-DD)
- `endDate`: End date (YYYY-MM-DD)

##### Response
```json
{
  "data": {
    "logs": [
      {
        "date": "date",
        "totalAmount": "number",
        "entries": [
          {
            "id": "string",
            "amount": "number",
            "time": "datetime"
          }
        ]
      }
    ]
  }
}
```

### Fasting Tracking

#### Start Fast

```http
POST /health/fasting/start
```

Start a new fasting period.

##### Request Body
```json
{
  "type": "16:8|18:6|20:4|custom",
  "plannedEndTime": "datetime"
}
```

##### Response
```json
{
  "data": {
    "fastingSession": {
      "id": "string",
      "startTime": "datetime",
      "plannedEndTime": "datetime",
      "type": "string",
      "status": "ongoing"
    }
  }
}
```

#### End Fast

```http
POST /health/fasting/{id}/end
```

End an ongoing fast.

##### Response
```json
{
  "data": {
    "fastingSession": {
      "id": "string",
      "startTime": "datetime",
      "endTime": "datetime",
      "type": "string",
      "duration": "number", // in minutes
      "status": "completed"
    }
  }
}
```

#### Get Fasting History

```http
GET /health/fasting
```

Get fasting history.

##### Query Parameters
- `startDate`: Start date (YYYY-MM-DD)
- `endDate`: End date (YYYY-MM-DD)

##### Response
```json
{
  "data": {
    "sessions": [
      {
        "id": "string",
        "startTime": "datetime",
        "endTime": "datetime",
        "type": "string",
        "duration": "number",
        "status": "completed|ongoing|broken"
      }
    ]
  },
  "meta": {
    "totalSessions": "number",
    "averageDuration": "number"
  }
}
```