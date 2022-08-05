const users2 = [
    {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        username: 'jdoe',
        tel: '555-555-1111'
    },
    {
        id: 2,
        name: 'Jane',
        lastname: 'Doe',
        username: 'jane',
        tel: '555-555-2222'
    },
    {
        id: 3,
        name: 'Jack',
        lastname: 'Doe',
        username: 'jack',
        tel: '555-555-3333'
    }
];

function GetOne() {
    const buttonClick = () => {
        console.log(JSON.stringify(users2));
        document.getElementById('message1').innerHTML = JSON.stringify(users2[0]);
        }
    const clearClick = () => {
        document.getElementById('message1').innerHTML = '';
    }

    return (
        <div className="GetData">
            <h2>GetOne</h2>
                <button onClick={buttonClick}>Get</button>
                  <button onClick={clearClick}>Clear</button>
                <div id="message1"></div>
        </div>
    )
}

export default GetOne;