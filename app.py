from flask import Flask, render_template, url_for, redirect


app = Flask(__name__)


@app.route('/')
@app.route('/home')
def index():
    return render_template('index.html', title='Home')


@app.route('/about')
def about():
    return render_template('about.html', title='About')


@app.route('/market-customer')
def market_customer():
    return render_template('market.html', title='Market & Customer')


@app.route('/business')
def business():
    return render_template('business.html', title='Business')


@app.route('/team')
def team():
    return render_template('team.html', title='Team')


@app.route('/contact-us')
def contact_us():
    return redirect(url_for('team'))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
