from flask import Flask, jsonify, request
import mysql.connector
from mysql.connector import Error
from flask import Flask
from flask_cors import CORS



app = Flask(__name__)
CORS(app)


# Function to create a connection to the MySQL database
@app.route('/')
def home():
    return "Welcome to the Antillia Emergency Network API!"

def create_server_connection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("MySQL Database connection successful")
    except Error as err:
        print(f"Error: '{err}'")
        # Consider re-raising the exception or handling it appropriately
    return connection

# Database credentials
host = "localhost"
user = "root"
password = "root"
db = "AntilliaEmergjobsNetwork"

@app.route('/add-job', methods=['POST'])
def add_job():
    try:
        job_data = request.get_json()
        print("Received job data:", job_data)  # Debug print

        if 'workOrderName' not in job_data:
            return jsonify({'error': 'Missing workOrderName'}), 400

# Now it's safe to access job_data['workOrderName']

        connection = create_server_connection(host, user, password, db)
        cursor = connection.cursor()

        query = """
            INSERT INTO Jobs (account, jobCategory, workOrderName, workOrderNumber, customerMobile, customerPhone, customerAddress)
            VALUES (%s, %s, %s, %s, %s, %s, %s);
        """
        values = (

            job_data['account'],
            job_data['jobCategory'],
            job_data['workOrderName'],
            job_data['workOrderNumber'],
            job_data['customerMobile'],
            job_data['customerPhone'],
            job_data['customerAddress']
        )
        cursor.execute(query, values)
        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({'message': 'Job added successfully'}), 201
    except Error as e:
        print(e)
        return jsonify({'error': 'An error occurred'}), 500

@app.route('/get-jobs', methods=['GET'])
def get_jobs():
    try:
        connection = create_server_connection(host, user, password, db)
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM Jobs;")
        jobs = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(jobs)
    except Error as e:
        print(e)
        # Handle error
        return jsonify({'error': 'An error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)