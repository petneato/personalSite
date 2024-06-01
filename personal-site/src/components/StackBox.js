import React from 'react';
// import './Stack.scss'; // Import your custom SCSS if needed

const stacks = [
    { name: 'MongoDB', color: 'bg-green-500', logo: 'path/to/mongodb-logo.png' },
    { name: 'Express', color: 'bg-yellow-500', logo: 'path/to/express-logo.png' },
    { name: 'React', color: 'bg-blue-500', logo: 'path/to/react-logo.png' },
    { name: 'Node.js', color: 'bg-green-600', logo: 'path/to/nodejs-logo.png' },
    { name: 'Angular', color: 'bg-red-500', logo: 'path/to/angular-logo.png' },
    { name: 'Vue.js', color: 'bg-green-400', logo: 'path/to/vuejs-logo.png' },
    { name: 'Django', color: 'bg-green-700', logo: 'path/to/django-logo.png' },
    { name: 'Rails', color: 'bg-red-600', logo: 'path/to/rails-logo.png' },
  ];

const StackBox = () => {
    return (    
        <div className="flex flex-col items-center">
        {stacks.map((stack, index) => (
            <div key={index} className={`w-48 h-12 flex items-center justify-center ${stack.color} m-2`}>
            <img src={stack.logo} alt={`${stack.name} logo`} className="h-8 mr-2" />
            <span className="text-white font-bold">{stack.name}</span>
            </div>
        ))}
        </div>
    );
}

export default StackBox;