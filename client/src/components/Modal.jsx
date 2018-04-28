
import React from 'react';
import JwModal from 'jw-react-modal';

const customStyles = {
    body: {
        backgroundColor: 'red',
        fontSize: 100
    },
    background: {
        backgroundColor: 'green',
    }
};



export default class Modaler extends React.Component {
    componentDidMount = () => {

        JwModal.open('jw-modal-1')


    };



    render() {
        return (
            <div>
                <button onClick={JwModal.open('jw-modal-1')}>Open JW Modal 1</button>

                <JwModal id="jw-modal-1">
                    <h1>A JW Modal!</h1>
                    <p>
                        Add any html you like in here :)
    </p>
                    <button onClick={JwModal.close('jw-modal-1')}>Close</button>
                </JwModal>

            </div>
        );
    }
}

