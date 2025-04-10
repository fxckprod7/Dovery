from flask import Flask, render_template, url_for


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


if __name__ == '__main__':
    app.run(debug=True)
