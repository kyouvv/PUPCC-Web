from flask import Flask, render_template, request, redirect, jsonify
from functions import getOrgs, addOrg
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'pupccwebsite'

@app.route('/api/getorgs', methods=['GET'])
def home():
    if request.method == 'GET':
        data = getOrgs()
        return jsonify(data)

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/admin/add', methods=['POST'])
def add():
    if request.method == 'POST':

        name = request.form['name']
        desc = request.form['description']
        image = request.form['img_link']
        social = request.form['social']

        addOrg(name, desc, social, image)

        return redirect('/admin')

    else:

        return redirect('/admin')      


if __name__ == '__main__':
    app.run(debug=True)