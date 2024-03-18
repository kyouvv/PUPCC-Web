import os
import json
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload

SCOPE = ['https://www.googleapis.com/auth/spreadsheets']
SHEETS_ID = '1OZz81rKvDkIBsONz4W-Kxwnbh43y0X_pPh0DtDhJfXI'

# Load credentials from environment variable
creds_json = os.getenv('CREDENTIALS')

print(creds_json)

def write_credentials_json(credentials):
    with open('credentials.json', 'w') as outfile:
        json.dump(credentials, outfile)

def authenticate():
    creds = None

    write_credentials_json(creds_json)

    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file("token.json", SCOPE)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        
        else:
            flow = InstalledAppFlow.from_client_config(
    'credentials.json', SCOPE,
    prompt='consent'
)
            creds = flow.run_local_server(port=0)

        with open('token.json', 'w') as token:
            token.write(creds.to_json())
            
    return creds

def get_service(service_name, version, creds):
    return build(service_name, version, credentials=creds)

def getOrgs():
    try:
        creds = authenticate()
        service = build('sheets', 'v4', credentials=creds)

        # Define the range to retrieve data from (assuming data starts from A1)
        range_ = "PUP_Orgs!A:E"
        # Call the Sheets API to get values from the specified range
        result = service.spreadsheets().values().get(
        spreadsheetId=SHEETS_ID, range=range_).execute()

        # Extract values from the result
        values = result.get('values', [])
            
        data = []
        if values:
            for row in values:
                print(row)
                if len(row) >= 4:
                    data.append({'name': row[0], 'description' : row[1], 'social': row[2], 'image' : row[3], 'category': row[4]})
                else:
                    print(f"Incomplete data for row: {row}")
            return data
        else:
            print("Sheet not found.")
            return None

    except Exception as e:
        print('Error:', e)
        return None
    
def addOrg(name: str, description:str, social_link: str, image_link: str):
    try:
        creds = authenticate()
        service = get_service('sheets', 'v4', creds)

        sheet = service.spreadsheets()

        range_ = "PUP_Orgs!A:C"

        data = {
            'values' : [[name, description, social_link, image_link]]
        }

        sheet.values().append(spreadsheetId=SHEETS_ID, range=range_, body=data, valueInputOption="USER_ENTERED").execute()

    except Exception as e:
        print("Execption: ", e)
