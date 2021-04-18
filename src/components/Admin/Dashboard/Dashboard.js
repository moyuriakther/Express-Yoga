import React from 'react';
import Admin from '../Admin/Admin';

const containerStyle ={ 
    backgroundColor:'#f4f7fc',
    height:'100%'
}
const Dashboard = () => {
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3">
                    <h3>side bar</h3>
                </div>
                <div className="col-md-9">
                    <Admin/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;

