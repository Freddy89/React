import React from 'react';

class Home extends React.Component {
    state = {
        currency: [],
        isLoad: false,
        txtValue: {},
        txtResult: {}
    };
    //fetch or axios
    componentDidMount() {
        this.setState({ isLoad: true });
        setTimeout(() => {
            fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
                .then(x => {
                    return x.json();
                })
                .then(data => {

                    console.log("----data----", data);
                    this.setState({ isLoad: false, currency: data });
                    //throw new Error("Hello Peter");
                })
                .catch(er => {
                    alert(`Помилка ${er.message}`)
                });
        }, 2000);
    }

    onHandleChange = (e) => {
        //console.log("value :", e.target.value);
        this.setState({ txtValue: e.target.value });
    }

    onHandlerSelChange = (e) => {
        //console.log("---- select on shange ----", e.target.value);
        const valSel = e.target.value;
        const ccy = this.state.currency.find((c) => c.ccy === valSel);
        if (ccy) {
            //alert(this.state.txtValue * ccy.buy);
            this.state.txtResult = this.state.txtValue * ccy.buy;
            document.getElementById('rez').value = this.state.txtResult;
        }
    }

    render() {
        console.log("----", this.state)
        var p = 13;
        const { isLoad } = this.state;

        const options = this.state.currency.map((c) => {
            return (
                <option key={c.ccy}>{c.ccy}</option>
            );
        });
        return (
            <div>
                <p><img src="https://v2l.ccdnss.com/generate_files/pg/70/images/68dee0d3ca3c28a91d1bc1e0b71a729b.jpg"></img></p>
                <h1>Конвертер валют</h1>
                <input type="text" onChange={this.onHandleChange} />
                {isLoad && <span>Loading ...</span>}

                {!isLoad &&
                    <select onChange={this.onHandlerSelChange}>
                        <option></option>
                        {options}
                    </select>
                }
                <br />
                <br />
                <input type="text" id="rez"></input>
                <br />
                <p><button>
                    <img src="https://fitnessexpert.com/sites/default/files/journal-anonce/w512h5121348753302perspectivebuttonstandby.png" width="50" height="50" />
                </button></p>
            </div>
        );
    }
}


export default Home;