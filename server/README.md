# EventPortal REST API

## Base URL:

```
http://localhost:1337/api
```

## End-points:

> ```
> /register
> /login
> /organization
> /members
> /events
> /news
> /roles
> /permissions
>
> ```

## Register

### Method: POST

> ```
> /register
> ```

### Parameters

| Param     | value         | Type       | Required |
| --------- | ------------- | ---------- | -------- |
| firstName | `<firstName>` | `<string>` | yes      |
| lasttName | `<lasttName>` | `<string>` | yes      |
| email     | `<email>`     | `<string>` | yes      |
| password  | `<password>`  | `<string>` | yes      |

### Response

```json
{
    "success": 1,
    "message": "Registered a new user successfully."
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Login

### Method: POST

> ```
> /login
> ```

### Parameters

| Param    | value        | Type   | Required |
| -------- | ------------ | ------ | -------- |
| email    | `<email>`    | string | yes      |
| password | `<password>` | string | yes      |

### Response

```json
{
    "success": 1,
    "data": {
        "id": 1,
        "first_name": "Linus",
        "last_name": "Jyckesson",
        "email": "linus.jyckesson@gmail.com",
        "phone_number": "0701740633",
        "adress": "Vulcanusgatuvägen 2, 850 66 Luleå",
        "access_token": "0",
        "eventportal_admin": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjEsImZpcnN0X25hbWUiOiJMaW51cyIsImxhc3RfbmFtZSI6Ikp5Y2tlc3NvbiIsImVtYWlsIjoibGludXMuanlja2Vzc29uQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJHBPekwzNEl3ZGlTNzVJRklLYWxFdWVpN01rMVM2cDZMTlZEYWYwaTk1SlVlY2RrTDVvcEJtIiwicGhvbmVfbnVtYmVyIjoiMDcwMTc0MDYzMyIsImFkcmVzcyI6IlZ1bGNhbnVzZ2F0dXbDpGdlbiAyLCA4NTAgNjYgTHVsZcOlIiwiYWNjZXNzX3Rva2VuIjoiMCIsImV2ZW50cG9ydGFsX2FkbWluIjoxfSwiaWF0IjoxNjQ1NDE4NTM4fQ.4uhO9p6HnYtNZX7ASorOcLCQ66irvJyC-IRK1zQbBvQ"
}
```

### Error

```json
{
    "success": 0,
    "message": "Invalid email or password"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get all organizations

### Method: GET

> ```
> /organization
> ```

### Parameters

| Param | value     | Type   | Required |
| ----- | --------- | ------ | -------- |
| token | `<token>` | string | yes      |

### Response

```json
{
    "success": 1,
    "data": [
        {
            "id": 1,
            "org_nr": "12345-67890",
            "name": "Ettan",
            "description": "",
            "logo": "",
            "banner": "",
            "colours": "",
            "membership_fee": 200,
            "admin_fee": 100
        }
    ]
}
```

### Error

```json
{
    "success": 1,
    "message": "Invalid token."
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get an organization by organization id

### Method: GET

### Parameters

| Param | value     | Type   | Required |
| ----- | --------- | ------ | -------- |
| token | `<token>` | string | yes      |

> ```
> /organization/1
> ```

### Response

```json
{
    "success": 1,
    "data": [
        {
            "id": 1,
            "org_nr": "12345-67890",
            "name": "Ettan",
            "description": "",
            "logo": "",
            "banner": "",
            "colours": "",
            "membership_fee": 200,
            "admin_fee": 100
        }
    ]
}
```

### Error:

```json
{
    "success": 0,
    "message": "No record found with that id."
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Create an organization

### Method: POST

> ```
> /organization
> ```

### Parameters

| Param         | value             | Type   | Required |
| ------------- | ----------------- | ------ | -------- |
| token         | `<token>`         | string | yes      |
| orgNr         | `<orgNr>`         | number | yes      |
| name          | `<name>`          | string | yes      |
| description   | `<description>`   | string | yes      |
| logo          | `<logo>`          | string | yes      |
| banner        | `<banner>`        | string | yes      |
| colours       | `<colours>`       | string | yes      |
| membershipFee | `<membershipFee>` | number | yes      |
| adminFee      | `<adminFee>`      | number | yes      |

### Response

```json
{
    "success": 1,
    "message": "Added a new organization successfully."
}
```

### Error:

```json
{
    "success": 0,
    "message": "Access Denied, unauthorized user."
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get All events

### Method: GET

> ```
> /event
> ```

### Parameters

| Param | value     | Type   | Required |
| ----- | --------- | ------ | -------- |
| token | `<token>` | string | yes      |

### Response

```json
{
    "success": 1,
    "data": [
        {
            "id": 1,
            "org_id": 1,
            "event_name": "Snusmässa 2030",
            "price": 50,
            "description": "Dags för den årliga Snusmässan",
            "picture": "",
            "start_date": "2030-05-20T08:00:00.000Z",
            "end_date": "2030-05-21T08:00:00.000Z",
            "location": "Rävemåla",
            "published": 1,
            "visibility": 2,
            "deleted": null,
            "org_name": "Ettan",
            "org_logo": ""
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get event by id

### Method: GET

> ```
> /event/1
> ```

### Parameters

| Param   | value       | Type   |
| ------- | ----------- | ------ |
| token   | `<token>`   | string |
| eventId | `<eventId>` | number |

### Response

```json
{
    "success": 1,
    "data": [
        {
            "id": 1,
            "org_id": 1,
            "event_name": "Snusmässa 2030",
            "price": 50,
            "description": "Dags för den årliga Snusmässan",
            "picture": "",
            "start_date": "2030-05-20T08:00:00.000Z",
            "end_date": "2030-05-21T08:00:00.000Z",
            "location": "Rävemåla",
            "published": 1,
            "visibility": 2,
            "deleted": null,
            "org_name": "Ettan",
            "org_logo": ""
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get all members by organization id

### Method: GET

> ```
> /members/1
> ```

### Parameters

| Param | value     | Type   |
| ----- | --------- | ------ |
| token | `<token>` | string |
| orgId | `<orgId>` | number |

### Response

```json
{
    "success": 1,
    "data": [
        {
            "UserID": 2,
            "FirstName": "Bengt",
            "LastName": "Talgoxesson",
            "Email": "bengt.talgoxesson@gmail.com",
            "PhoneNumber": "0701740621",
            "Adress": "Adaptivevägen 10, 834 07 Boden",
            "DateJoined": "2021-11-17T08:47:59.000Z",
            "ExpireDate": "2022-11-17T08:47:59.000Z",
            "PaymentStatus": 500
        },
        ...
    ]
}
```
