import React from 'react';

import Mongo from '../../public/images/Mongo.jpg';
import Express from '../../public/images/express.png';
import ReactLogo from '../../public/images/react.png';
import Node from '../../public/images/node.png';
import Angular from '../../public/images/angular.png';
import Vue from '../../public/images/vuejs.jpeg';
import Django from '../../public/images/next-js-django-4140926669.png';
import Rails from '../../public/images/Ruby_on_Rails_logo-3872381217.png';

const stacks = [
    { name: 'MongoDB', color: 'bg-green-500', logo: Mongo },
    { name: 'Express', color: 'bg-yellow-500', logo: Express},
    { name: 'React', color: 'bg-blue-500', logo: ReactLogo },
    { name: 'Node.js', color: 'bg-green-600', logo: Node },
    { name: 'Angular', color: 'bg-red-500', logo: Angular },
    { name: 'Vue.js', color: 'bg-green-400', logo: Vue },
    { name: 'Django', color: 'bg-green-700', logo: Django },
    { name: 'Rails', color: 'bg-red-600', logo: Rails },
];

const MERN = [
    { name: 'MongoDB', color: 'bg-green-500', logo: Mongo },
    { name: 'Express', color: 'bg-yellow-500', logo: Express},
    { name: 'React', color: 'bg-blue-500', logo: ReactLogo },
    { name: 'Node.js', color: 'bg-green-600', logo: Node },

];



const StackBox = () => {
    return (    
        <div className="flex flex-col items-center border-slate-500">
        {MERN.map((stack, index) => (
            <div key={index} className={`w-48 h-12 flex items-center justify-center ${stack.color} `}>
            <img src={stack.logo} alt={`${stack.name} logo`} className="h-8 mr-2" />
            <span className="text-white font-bold">{stack.name}</span>
            </div>
        ))}
        </div>
    );
}

export default StackBox;