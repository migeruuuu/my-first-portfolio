// SKILLS: Change text in quotes. Copy an entire { ... }, line to add a skill.
// Icon choices: design, layout, search, code, cloud, git, tools.
// Suggested maximum: 4 categories, 6 skills each; descriptions under 100 characters.

export const categories = [
  {
    title: 'AI and Automation',
    skills: [
      { name: 'Prompt engineering', desc: 'Writing clear prompts and workflows for AI tools.', icon: 'tools' },
      { name: 'Claude and AI tools', desc: '9 Anthropic AI Fluency and Claude certifications.', icon: 'tools' },
      { name: 'AI project planning', desc: 'Scoping and delegating tasks between people and AI.', icon: 'search' },
    ],
  },
  {
    title: 'Development',
    skills: [
      { name: 'Java and OOP', desc: 'Object-oriented programs built in Eclipse for IT coursework.', icon: 'code' },
      { name: 'Next.js and React', desc: 'Building and deploying web pages like this portfolio.', icon: 'code' },
      { name: 'HTML and CSS', desc: 'Turning ideas into working, styled pages.', icon: 'layout' },
      { name: 'AWS fundamentals', desc: 'Learning cloud basics with the AWS Learning Club.', icon: 'cloud' },
    ],
  },
  {
    title: 'Marketing and Partnerships',
    skills: [
      { name: 'Social media marketing', desc: 'Grew a 73K+ follower P-Pop page at Amartha.', icon: 'search' },
      { name: 'Partnerships and MOAs', desc: 'Building org and sponsor partnerships as BITS EVP.', icon: 'tools' },
      { name: 'Sales research', desc: 'Lead and market research at The Parliament.', icon: 'search' },
      { name: 'Graphic design', desc: 'Pubmats, infographics and decks in Canva.', icon: 'design' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git and GitHub', desc: 'Version control, branches and pull requests.', icon: 'git' },
      { name: 'VS Code', desc: 'Main editor for coding and building projects.', icon: 'code' },
      { name: 'Canva', desc: 'Designs for orgs, events and class projects.', icon: 'design' },
    ],
  },
];

export const skillsSection = { title: 'Skills & Technologies', subtitle: 'The tools and skills I use to build and grow ideas.' };