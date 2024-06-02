import React from 'react';
import StackBox from './StackBox.js'


const ProjectCard = () => {
    return (
        <div className=" w-[900px] h-[480px] flex bg-orange-500 m-20">
            <StackBox />
            <div className="flex flex-col justify-between p-4 items-center space-">
                <h3>Project Name</h3>
                <div className='flex flex-row justify-self-start'>
                    <p>Project Status: Status</p>
                    <p>Project Dates: Dates</p>
                    <a href="" className=''>GitHub</a>
                </div>


                <p className='bg-zinc-200 align-bottom py-2 px-4'>"TOM!" No answer. "TOM!" No answer. "What's gone with that boy, I wonder? 
                    You TOM!" No answer. The old lady pulled her spectacles down and looked 
                    over them about the room; then she put them up and looked out under them. 
                    She seldom or never looked through them for so small a thing as a boy; they 
                    were her state pair, the pride of her heart, and were built for "style," 
                    not service—she could have seen through a pair of stove-lids just as well. 
                    She looked perplexed for a moment, and then said, not fiercely, but still 
                    loud enough for the furniture to hear: "Well, I lay if I get hold of you 
                    I'll—" She did not finish, for by this time she was bending down and punching 
                    under the bed with the broom, and so she needed breath to punctuate the punches
                    with. She resurrected nothing but the cat. "I never did see the beat of that 
                    boy!" She went to the open door and stood in it and looked out among the tomato 
                    vines and "jimpson" weeds that constituted the garden. No Tom.
                </p>

            </div>

        </div>
    );
};

export default ProjectCard;