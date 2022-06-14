import React from 'react';

export const renderField = ({ label, input, type, placeholder, meta: { touched, error } }) => (
    <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
        <label className="label-design">{label}</label>
        <input className="form-control" type={type} placeholder={placeholder} {...input} />
        {touched && error && <div className="form-error">{error}</div>}
    </div>
);

export const renderTextArea = ({ label, input, placeholder, meta: { touched, error } }) => (
    <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
        <label className="label-design">{label}</label>
        <div>
            <textarea className="form-control" {...input} placeholder={placeholder} rows="5" />
            {touched && error && <div className="form-error">{error}</div>}
        </div>
    </div>
);

export const renderSelect = ({ label, input, meta: { touched, error }, children }) => (
    <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
        <label className="label-design">{label}</label>
        <select className="form-control" {...input}>
            {children}
        </select>
        {touched && error && <div className="form-error">{error}</div>}
    </div>
);

// export const renderSelect = props => {
//     const renderSelectOptions = (key, index) => {
//         return (
//             <option
//                 key={`${index}-${key}`}
//                 value={key}
//             >
//                 {props.options[key]}
//             </option>
//         );
//     }

//     if (props && props.options) {
//         return (
//             <div className={`form-group ${props.meta.touched && props.meta.error ? 'has-error' : ''}`}>
//                 <label className="label-design">{props.label}</label>
//                 <select {...props.input} className="form-control">
//                     <option value="">Select</option>
//                     {Object.keys(props.options).map(renderSelectOptions)}
//                 </select>
//                 {props.meta.touched && props.meta.error && <div className="form-error">{props.meta.error}</div>}
//             </div>
//         )
//     }

//     return <div></div>
// }
