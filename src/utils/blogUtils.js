import matter from 'gray-matter'
import { generateSlug } from '../lib/utils'

// Sample blog posts data (in a real app, you'd fetch this from an API or CMS)
const samplePosts = [
  {
    title: "My First Startup: Lessons Learned from Building a Tech Company",
    date: "2024-12-15",
    author: "Your Name",
    excerpt: "Sharing the real story of building my first startup - the failures, successes, and everything I wish I knew before starting.",
    thumbnail: "/blog/startup-lessons.jpg",
    tags: ["Startup", "Entrepreneurship", "Lessons Learned"],
    views: 1250,
    content: `# My First Startup: Lessons Learned from Building a Tech Company

Starting a tech company is one of the most challenging yet rewarding experiences you can have. After building my first startup, I've learned countless lessons that I wish I knew before starting. Here's my honest account of the journey.

## The Beginning: From Idea to Reality

Every startup begins with an idea. Mine was born out of frustration with existing solutions in the market. I saw a gap that I believed I could fill, but I had no idea how complex the journey would be.

### Key Lesson #1: Validate Before You Build

The biggest mistake I made was building a product without proper market validation. I spent months developing features that nobody actually wanted. 

**What I should have done:**
- Conducted more customer interviews
- Built a minimum viable product (MVP) first
- Tested the market demand before full development

## The Technical Challenges

Building a tech startup means wearing multiple hats - developer, designer, marketer, and CEO all at once.

### Key Lesson #2: Focus on Core Features

I tried to build everything at once, which led to:
- Delayed launch timeline
- Overcomplicated user experience
- Burnout and technical debt

**Better approach:**
- Start with one core feature
- Make it perfect before adding more
- Listen to user feedback before expanding

## The Business Side

Technical skills are only half the battle. Running a business requires completely different skills.

### Key Lesson #3: Learn Business Fundamentals

I wish I had spent more time learning about:
- Customer acquisition costs
- Unit economics
- Marketing and sales strategies
- Legal and financial aspects

## The Mental Game

Startup life is emotionally challenging. The highs are high, but the lows can be devastating.

### Key Lesson #4: Build a Support System

- Find mentors who've been through it
- Join startup communities
- Don't isolate yourself
- Celebrate small wins

## What I'd Do Differently

Looking back, here are the top 3 things I'd change:

1. **Start with customer validation** - Build something people actually want
2. **Focus on one thing** - Perfect your core offering before expanding
3. **Build in public** - Share your journey and get feedback early

## The Silver Lining

Despite the challenges, building a startup taught me invaluable skills:
- Problem-solving under pressure
- Leadership and team management
- Technical and business acumen
- Resilience and persistence

## Conclusion

Starting a company is hard, but it's also one of the most educational experiences you can have. The key is to learn from failures, stay focused, and never stop iterating.

*What's your startup story? I'd love to hear about your experiences and lessons learned.*`
  },
  {
    title: "How I Raised $50K for My Startup: A Complete Guide",
    date: "2024-12-10",
    author: "Your Name",
    excerpt: "The complete story of how I raised my first $50K in funding - from pitch deck creation to investor meetings and everything in between.",
    thumbnail: "/blog/funding-guide.jpg",
    tags: ["Funding", "Startup", "Investors", "Pitch Deck"],
    views: 2100,
    content: `# How I Raised $50K for My Startup: A Complete Guide

Raising funding for your startup is one of the most challenging yet crucial milestones in an entrepreneur's journey. After successfully raising $50K for my startup, I want to share the complete process, including what worked, what didn't, and everything I learned along the way.

## The Preparation Phase

Before you even think about approaching investors, you need to prepare thoroughly. This phase can make or break your fundraising efforts.

### 1. Perfect Your Pitch Deck

Your pitch deck is your first impression. Here's what mine included:

- **Problem Statement**: Clear articulation of the problem you're solving
- **Solution**: Your unique approach to solving the problem
- **Market Size**: Total addressable market (TAM) and serviceable addressable market (SAM)
- **Business Model**: How you plan to make money
- **Traction**: Current metrics, user growth, revenue
- **Team**: Why your team is the right one to execute
- **Financial Projections**: 3-5 year projections
- **Ask**: How much you're raising and what you'll use it for

### 2. Know Your Numbers Inside and Out

Investors will ask detailed questions about:
- Customer acquisition cost (CAC)
- Lifetime value (LTV)
- Monthly recurring revenue (MRR)
- Churn rate
- Burn rate
- Runway

## The Fundraising Process

### Phase 1: Angel Investors and Friends & Family

I started with people who knew me personally:
- **Friends and family**: Raised $15K from close connections
- **Angel investors**: Found through networking events and LinkedIn
- **Accelerators**: Applied to local startup accelerators

### Phase 2: Seed Investors

For the remaining $35K, I approached:
- **Seed-stage VCs**: Focused on those investing in my industry
- **Corporate investors**: Companies with strategic interest
- **Crowdfunding**: Used platforms like AngelList and Republic

## What Worked

### 1. Building Relationships First

Instead of cold pitching, I:
- Attended startup events and meetups
- Built relationships with other founders
- Asked for introductions from mutual connections
- Provided value before asking for anything

### 2. Showing Traction

Investors want to see that your idea works:
- **User growth**: Demonstrated month-over-month growth
- **Revenue**: Showed consistent revenue generation
- **Customer testimonials**: Real feedback from paying customers
- **Partnerships**: Strategic partnerships with established companies

### 3. Being Transparent About Challenges

I was honest about:
- Current challenges and how I planned to solve them
- Competition and our competitive advantages
- Risks and mitigation strategies
- Previous failures and lessons learned

## What Didn't Work

### 1. Pitching Too Early

I made the mistake of pitching before having:
- A working product
- Paying customers
- Clear metrics
- A solid team

### 2. Not Following Up

Many investors said "no" initially but became interested after seeing our progress. I should have:
- Kept them updated on our progress
- Sent monthly updates
- Invited them to product demos
- Asked for feedback on our pitch

### 3. Focusing Only on Money

I learned that the right investor brings more than just money:
- Industry expertise
- Network and connections
- Strategic guidance
- Credibility and validation

## The Legal and Due Diligence Process

Once investors showed interest:

1. **Term Sheet**: Negotiated investment terms
2. **Due Diligence**: Investors reviewed our business thoroughly
3. **Legal Documentation**: Worked with lawyers on investment agreements
4. **Closing**: Finalized the investment and received funds

## Key Lessons Learned

### 1. Fundraising Takes Time

The entire process took 6 months from start to finish. Be patient and persistent.

### 2. Rejection is Normal

I pitched to 50+ investors and only 3 said yes. Don't take rejection personally.

### 3. Preparation is Everything

The more prepared you are, the more confident you'll be in meetings.

### 4. Network is Net Worth

Your network is your most valuable asset in fundraising.

## Conclusion

Raising $50K was one of the hardest things I've ever done, but it taught me invaluable lessons about business, persistence, and the importance of building relationships. The key is to start early, be prepared, and never give up.

*Are you currently fundraising? I'd love to hear about your experience and help if I can!*`
  },
  {
    title: "Your Article Title Here",
    date: "2024-12-20",
    author: "Your Name",
    excerpt: "Write a brief 1-2 sentence description of your article that will appear on the blog listing page.",
    thumbnail: "/blog/your-image.jpg",
    tags: ["Startup", "Your Tag", "Another Tag"],
    views: 0,
    content: `# Your Article Title Here

Write your full article content here using Markdown formatting.

## Introduction

Start with an engaging introduction that hooks your readers.

## Main Content

Use headings, bullet points, and formatting to make your content easy to read:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- \`Code snippets\` for technical content

### Subsection

You can create subsections with ###

## Conclusion

End with a strong conclusion and call-to-action.

*What do you think? Share your thoughts in the comments below!*`
  }
]

export function getAllBlogPosts() {
  const posts = samplePosts.map((post) => {
    const slug = generateSlug(post.title)
    
    return {
      slug,
      frontmatter: {
        title: post.title,
        date: post.date,
        author: post.author,
        excerpt: post.excerpt,
        thumbnail: post.thumbnail,
        tags: post.tags,
        views: post.views || 0
      },
      content: post.content,
      excerpt: post.excerpt,
      date: new Date(post.date),
      views: post.views || 0
    }
  })

  // Sort by date (newest first)
  return posts.sort((a, b) => b.date - a.date)
}

export function getBlogPostBySlug(slug) {
  const posts = getAllBlogPosts()
  return posts.find(post => post.slug === slug)
}

export function getBlogPostsByTag(tag) {
  const posts = getAllBlogPosts()
  return posts.filter(post => 
    post.frontmatter.tags && post.frontmatter.tags.includes(tag)
  )
}

export function getAllTags() {
  const posts = getAllBlogPosts()
  const tags = new Set()
  
  posts.forEach(post => {
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach(tag => tags.add(tag))
    }
  })
  
  return Array.from(tags).sort()
}

// View tracking functions
export function trackBlogView(slug) {
  // In a real app, you'd send this to your analytics service
  // For now, we'll just log it and could store in localStorage
  console.log(`Blog view tracked: ${slug}`)
  
  // Store view count in localStorage (simple approach)
  const viewKey = `blog_views_${slug}`
  const currentViews = parseInt(localStorage.getItem(viewKey) || '0')
  localStorage.setItem(viewKey, (currentViews + 1).toString())
  
  return currentViews + 1
}

export function getBlogViewCount(slug) {
  const viewKey = `blog_views_${slug}`
  return parseInt(localStorage.getItem(viewKey) || '0')
}

export function incrementBlogView(slug) {
  const newCount = trackBlogView(slug)
  return newCount
}
