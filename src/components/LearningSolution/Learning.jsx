import React, { useState } from 'react';
import '../LearningSolution/Learning.css';

function Learning() {
    const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className='Tab-Container'>
      <div className="tab-buttons">
        <button className='Tab-Btn' onClick={() => handleTabClick(0)}>Tab 1</button>
        <button className='Tab-btn' onClick={() => handleTabClick(1)}>Tab 2</button>
        <button className='Tab-Btn' onClick={() => handleTabClick(2)}>Tab 3</button>
      </div>
      <div className="tab-contentBox">
        {activeTab === 0 && <div className='Tab-Content'>Psychological states such as thoughts and feelings are real. Brain states are real. The problem is that the two are not real in the same way, creating the mind–brain correspondence problem. In this article, I present a possible solution to this problem that involves two suggestions. First, complex psychological states such as emotion and cognition an be thought of as constructed events that can be causally reduced to a set of more basic, psychologically primitive ingredients that are more clearly respected by the brain. Second, complex psychological categories like emotion and cognition are the phenomena that require explanation in psychology, and, therefore, they cannot be abandoned by science. Describing the content and structure of these categories is a necessary and valuable scientific activity.</div>}

        {activeTab === 1 && <div className='Tab-Content'>From its inception in the early 18th century (as an amalgam of philosophy, neurology, and physiology), psychology has always been in a bit of an identity crisis, trying to be both a social and a natural science.1 Psychologists attempt bridge the social and natural worlds using the conceptual tools of their time. Throughout our history, the link between the social (mind and behavior) and the natural (brain) has felt less like a solid footbridge and more like a tightrope requiring lightness of foot and a really strong safety net. Mind–brain, and relatedly, behavior–brain, correspondence continue to be central issues in psychology, and they remain the largest challenge in 21st century psychology.</div>}

        {activeTab === 2 && <div className='Tab-Content'>The difficulty in linking the human mind and behavior on the one hand and the brain on the other is rooted, ironically enough, in the way the human brain itself works. Human brains categorize continuously, effortlessly, and relentlessly. Categorization plays a fundamental role in every human activity, including science. Categorizing functions like a chisel, dividing up the sensory world into figure and ground, leading us to attend to certain features and to ignore others. Via the process of categorization, the brain transforms only some sensory stimulation into information. Only some of the wavelengths of light striking our retinas are transformed into seen objects, and only some of the changes in air pressure registered in our ears are heard as words or music. To categorize something is to render it meaningful. It then becomes possible to make reasonable inferences about that thing, to predict what to do with it, and to communicate our experience of it to others. There are ongoing debates about how categorization works, but the fact that it works is not in question.</div>}
      </div>
    </div>
    </div>
  )
}

export default Learning
