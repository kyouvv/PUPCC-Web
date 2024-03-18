# PUPCC-Organization Database (Flask Backend)

## Introduction
This Flask application provides backend functionality for managing organizations within the PUP Campus Connect system. It includes authentication with Google Sheets API and endpoints for retrieving organization data and adding new organizations. The application also serves an admin panel for managing organizations.

## File Structure
- **`main.py`**: Contains the Flask application with routes for serving API endpoints and rendering the admin panel.
- **`functions.py`**: Includes functions for interacting with Google Sheets API, such as authentication and data retrieval.

## `functions.py`
### Dependencies
- `os`
- `json`
- `google-auth`
- `google_auth_oauthlib`
- `googleapiclient`

### Functions
1. **`authenticate()`**: Authenticates with Google Sheets API using OAuth2 credentials.
2. **`get_service(service_name, version, creds)`**: Returns a service object for the specified Google API.
3. **`getOrgs()`**: Retrieves organization data from Google Sheets and returns it as a list of dictionaries. (json)
4. **`addOrg(name, description, social_link, image_link)`**: Adds a new organization to Google Sheets.

## Database
We utilized Google Sheets API for easy editing of information.

## `main.py`
### Dependencies
- `Flask`
- `render_template` (from Flask)
- `request` (from Flask)
- `redirect` (from Flask)
- `jsonify` (from Flask)
- `CORS` (from flask_cors)

### Routes
1. **`/api/getorgs`** (GET): Returns organization data as JSON.
2. **`/admin`** (GET): Renders the admin panel HTML template.
3. **`/admin/add`** (POST): Handles addition of a new organization.

## CORS Configuration
- Cross-Origin Resource Sharing (CORS) is enabled to allow requests from different origins to access the backend.

## Secret Key
- A secret key (`SECRET_KEY`) is configured for the Flask application.

## Running the Application
- If the script is executed directly (`__name__ == '__main__'`), the Flask application runs in debug mode.

## Note
- Ensure that the necessary dependencies are installed (`flask`, `google-auth`, `google-auth-oauthlib`, `google-api-python-client`, `flask-cors`) for proper functionality.
