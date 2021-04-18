import React from 'react';
import { useHistory } from 'react-router';

export default function ClassDetails({classInfo}){
    // const classes = useStyles();
    const history = useHistory()
      const handleBook = (name) => {
          history.push(`/book/${name}`);
      }
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '200px', padding: '10px'}} src={classInfo.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{classInfo.name}</h5>
        </div>
    );
};
