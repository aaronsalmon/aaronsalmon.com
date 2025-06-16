---
layout: default
title: Introduction
permalink: /work/
---

# Introduction

<div class="two-column-container">
  <div class="two-column-nav">
    <ul>
      <li><a href="#anyone" class="active">For Anyone</a></li>
      <li><a href="#recruiters">For Recruiters</a></li>
      <li><a href="#experience">For Experience Directors</a></li>
      <li><a href="#design">For Design Directors</a></li>
      <li><a href="#product">For Product Managers</a></li>
      <li><a href="#engineers">For Engineers</a></li>
      <li><a href="#civic">For Civic Co-conspirators</a></li>
    </ul>
  </div>
  
  <div class="two-column-content">
    <div id="anyone" class="content-section active">
      <p>Hey there! I'm Aaron, a UX designer who's spent 20+ years figuring out how to make complex things actually work for real people. Whether it's government systems, startup platforms, or community initiatives, I'm all about meeting people where they are and building things that matter. When I'm not at my computer, you'll find me at my coffee shop in Wisconsin, teaching my boys to fish, or probably having heated discussions about roundabouts.</p>
    </div>
    
    <div id="recruiters" class="content-section">
      <p>I'm a strategic UX leader with 20+ years of experience across government, startups, and civic tech. I've led design for high-impact projects including political campaigns and defense systems. I specialize in translating complex technical challenges into user-centered solutions that people actually adopt. Currently wrapping up 5 years at Defense Digital Service and ready for my next mission-driven challenge.</p>
    </div>
    
    <div id="experience" class="content-section">
      <p>I'm the kind of UX leader who does whatever research it takes to understand real user needs. With 20+ years spanning campaigns, defense innovation, and civic tech, I've built teams, bridged departments, and created design systems that scale. I believe great UX happens when you combine rigorous research with the courage to tell hard truths about what's actually working (or not).</p>
    </div>
    
    <div id="design" class="content-section">
      <p>As a design leader who's been everything from solo designer to founding team member, I know how to build design culture that sticks. I've created design systems for large-scale projects and mentored designers through complex organizational challenges. I believe in "colleaguery" – that mix of craft excellence and human connection that makes teams thrive.</p>
    </div>
    
    <div id="product" class="content-section">
      <p>I'm a UX leader who speaks fluent PM – I've actually been one! From government projects to startup platforms, I understand the delicate dance between user needs, business goals, and technical constraints. I bring 20+ years of experience turning fuzzy requirements into shipped products that people love. Plus, I'm the designer who'll actually read your PRDs and come back with better questions.</p>
    </div>
    
    <div id="engineers" class="content-section">
      <p>I'm the UX designer who codes. From maintaining style guides for large-scale projects to building components for complex applications, I understand the technical side of bringing designs to life. I believe the best solutions happen when designers and engineers collaborate from day one, not when mockups get thrown over the wall. I'll respect your technical constraints while pushing for user experiences that are worth the engineering effort.</p>
    </div>
    
    <div id="civic" class="content-section">
      <p>Fellow troublemaker! I'm Aaron, and I believe design can strengthen democracy one interaction at a time. I've spent 20+ years using UX to amplify community voices – from campaign tools to civic platforms to chairing my town's bike commission. I'm convinced that whether you're fixing government workflows or neighborhood systems, it all comes down to listening to people and building things that actually serve them.</p>
    </div>
  </div>
</div>

<style>
.two-column-container {
  display: flex;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.two-column-nav {
  flex: 0 0 200px;
}

.two-column-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.two-column-nav li {
  margin-bottom: 10px;
}

.two-column-nav a {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #333;
  background-color: #f5f5f5;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.two-column-nav a:hover {
  background-color: #e0e0e0;
}

.two-column-nav a.active {
  background-color: #007bff;
  color: white;
}

.two-column-content {
  flex: 1;
  font-size: 1.1em;
  line-height: 1.6;
}

.content-section {
  display: none;
}

.content-section.active {
  display: block;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.two-column-nav a');
  const sections = document.querySelectorAll('.content-section');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links and sections
      links.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Show corresponding section
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).classList.add('active');
    });
  });
});
</script>

## Quick Links

- [Introduction](/work/intro/) - Learn about my approach and methodology
- [Samples](/work/samples/) - View my portfolio of projects
- [Case Studies](/work/case-studies/) - Detailed analysis of selected projects
- [Values](/work/values/) - My professional principles and approach
- [References](/work/references/) - Testimonials and professional references

## Featured Projects

*Coming soon...* 