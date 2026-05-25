# How to Deploy & Edit Your Haus & Key Website

## 📋 Table of Contents
1. [Deploying Your Website](#deploying-your-website)
2. [Editing Content & Text](#editing-content--text)
3. [Editing Images](#editing-images)
4. [Making Design Changes](#making-design-changes)

---

## 🚀 Deploying Your Website

### Step 1: Prepare Your Code
Your website is built with **Next.js** and **TypeScript**. Everything is ready to go—you just need to deploy it.

### Step 2: Create a Vercel Account (Free)
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. Done! You now have a Vercel account

### Step 3: Connect Your Repository to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Select **"Import from Git"**
3. Choose **"GitHub"** and paste your repository URL (if you haven't created one yet, see Step 4)
4. Click **"Import"**
5. Vercel will auto-detect Next.js—click **"Deploy"**
6. Wait 1-2 minutes for deployment to complete

### Step 4: (If Needed) Upload to GitHub
If you don't have a GitHub repository yet:
1. Go to [github.com](https://github.com) and create a free account
2. Create a new public repository called `haus-and-key-website`
3. Follow GitHub's instructions to push your local code to the repository
4. Then follow Step 3 above

### Step 5: Get Your Live URL
Once deployed, Vercel will give you a **live URL** like:
```
https://haus-and-key.vercel.app
```

This is your website! Share this link with anyone.

### Step 6: (Optional) Set Up a Custom Domain
To use your own domain (like `www.hausandkey.com`):
1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your domain
4. Follow instructions to point your domain provider to Vercel
5. Vercel handles SSL certificates automatically (your site is secure)

---

## ✏️ Editing Content & Text

### Finding Files to Edit
All editable content is in the `/app` folder:
- **Home page**: `/app/page.tsx`
- **Services page**: `/app/services/page.tsx`
- **About page**: `/app/about/page.tsx`
- **Contact page**: `/app/contact/page.tsx`
- **Components** (reusable sections): `/components/` folder

### How to Edit Text

**Example: Changing the homepage headline**

1. Open `/app/page.tsx` in VS Code
2. Find the text you want to change (search with Ctrl+F / Cmd+F)
3. Look for:
   ```
   Stress-Free Airbnb Co-Hosting for Busy Property Owners
   ```
4. Change it to your preferred text
5. Save the file (Cmd+S / Ctrl+S)
6. Vercel automatically rebuilds your site (takes 1-2 minutes)

### Common Sections to Edit

#### Hero Section (Homepage)
File: `/app/page.tsx` (lines 20-40)
- Headline
- Subheadline
- CTA button text

#### Services List
File: `/app/services/page.tsx` (lines 30-70)
- Service titles
- Service descriptions

#### About Page (Your Story)
File: `/app/about/page.tsx` (lines 30-80)
- Your story
- Professional background
- Stats (287+ stays, 15+ years, etc.)

#### Footer Contact Info
File: `/components/Footer.tsx` (lines 40-60)
- Email address
- Phone number
- Social media links

#### Testimonials
File: `/components/Testimonials.tsx` (lines 20-40)
- Guest quotes
- Guest names and titles

### Editing FAQ Questions
File: `/components/FAQ.tsx` (lines 10-30)

Find the `faqs` array and edit:
```javascript
{
  question: 'Your question here?',
  answer: 'Your answer here.',
},
```

---

## 🖼️ Editing Images

### Placeholder Images
Your website uses placeholder images from:
- High-quality stock photo services
- Placeholder services for demos

### Replace Placeholder Images

1. **Save your image** to `/public/images/` folder
   - Create the folder if it doesn't exist
   - Name it something clear (e.g., `property-1.jpg`)

2. **Find where images are used** in component files:
   - Search for `Image`, `src=`, or `<img` tags
   - Or search for "placeholder" or "image"

3. **Update the image path**
   Example:
   ```jsx
   // Old:
   <img src="https://placeholder.com/600x400" />
   
   // New:
   <img src="/images/property-1.jpg" />
   ```

### Property Showcase Images
File: `/components/PropertyShowcase.tsx`
- These are featured property images
- Replace URLs with paths to your actual property photos

### Featured Images
Files to check:
- `/components/Hero.tsx` - hero section image
- `/components/RevenueOptimization.tsx` - stats section images
- `/components/Testimonials.tsx` - profile images

---

## 🎨 Making Design Changes

### Color Palette
Colors are defined in `/tailwind.config.ts`:
- **Primary (Amber)**: `#b5835a` - used for buttons, accents
- **Dark (Slate)**: `#324048` - text, backgrounds
- **Background (Sand)**: `#f7f2ed` - light backgrounds
- **Accent**: `#b5835a` - hover states, highlights

To change colors:
1. Open `/tailwind.config.ts`
2. Find the `colors` section
3. Edit hex codes to your preferred colors
4. Save and Vercel rebuilds automatically

### Button Styles
Buttons use **Amber-600** (`bg-amber-600`). To change:
1. Search for `bg-amber-600` in any file
2. Change to your preferred Tailwind color (e.g., `bg-blue-600`)
3. Also update `hover:bg-amber-700` to match

### Font & Typography
Font family is set in `/styles/globals.css`:
- Currently: **Inter** (modern, clean)
- To change: edit the `font-family` line in `:root`

### Spacing & Layout
Tailwind CSS uses utility classes:
- `px-4` = padding horizontal
- `py-20` = padding vertical
- `mb-6` = margin bottom
- `gap-8` = gap between items

To adjust spacing globally:
- Use search and replace to change class names
- Example: `py-20` → `py-16` (reduces vertical padding)

### Rounded Corners
- `rounded-lg` = slightly rounded
- `rounded-xl` = more rounded
- `rounded-full` = circles

Change `rounded-lg` to `rounded-none` for square corners.

---

## 🔧 Advanced Edits

### Adding a New Service
1. Open `/app/services/page.tsx`
2. Find the `services` array around line 15
3. Add a new object:
```javascript
{
  icon: YourIcon,
  title: 'New Service Title',
  description: 'Description of what you do.',
},
```

### Adding a New FAQ
1. Open `/components/FAQ.tsx`
2. Find the `faqs` array around line 10
3. Add:
```javascript
{
  question: 'Your question?',
  answer: 'Your detailed answer.',
},
```

### Adding a New Testimonial
1. Open `/components/Testimonials.tsx`
2. Find the `testimonials` array around line 15
3. Add:
```javascript
{
  name: 'Client Name',
  title: 'Title/Role',
  text: 'Their testimonial quote...',
  rating: 5,
},
```

---

## 📱 Testing Your Changes

### Test Locally (Before Deploying)
1. Open terminal in your project folder
2. Run: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) in your browser
4. Your site runs locally—make edits and see changes instantly
5. Press Ctrl+C to stop the local server

### After Deploying
1. Go to your Vercel URL
2. Refresh the page (Cmd+R / Ctrl+R)
3. Hard refresh to clear cache (Cmd+Shift+R / Ctrl+Shift+R)
4. Your changes should appear within 1-2 minutes

---

## 🆘 Troubleshooting

### Changes aren't showing up
- **Hard refresh** your browser (Cmd+Shift+R / Ctrl+Shift+R)
- Wait 2-3 minutes for Vercel to rebuild
- Check for typos in your edits

### Images aren't loading
- Verify the file path is correct
- Make sure the image file is in `/public/`
- Use `/images/filename.jpg` format (note the leading slash)

### Something broke
- Check for missing quotation marks or commas in JavaScript files
- Use VS Code's error indicators (red squiggles)
- Revert changes if needed

### Contact form not working
- Test locally first (`npm run dev`)
- In production, you may need to connect a backend service
- For now, form submissions log to console

---

## 📝 SEO & Metadata

### Change Page Titles
File: `/app/layout.tsx`
```javascript
export const metadata: Metadata = {
  title: 'Your New Title | Haus & Key',
  description: 'Your new description...',
};
```

### Update Meta Descriptions
Also in `/app/layout.tsx`—these appear in Google search results.

---

## 🎯 Quick Reference

| Task | File | Lines |
|------|------|-------|
| Edit homepage headline | `/app/page.tsx` | 20-40 |
| Edit services | `/app/services/page.tsx` | 15-80 |
| Edit about/founder bio | `/app/about/page.tsx` | 30-80 |
| Edit contact info | `/components/Footer.tsx` | 40-60 |
| Edit FAQ | `/components/FAQ.tsx` | 10-30 |
| Edit testimonials | `/components/Testimonials.tsx` | 15-40 |
| Change colors | `/tailwind.config.ts` | 10-20 |
| Change domain | Vercel dashboard | Settings → Domains |

---

## 💡 Pro Tips

1. **Always test locally first**: Run `npm run dev` before deploying to catch errors
2. **Use VS Code search**: Cmd+F to find text you want to change
3. **Keep backups**: Before major changes, save a copy of your files
4. **Git commits**: After changes, commit to GitHub so you have version history
5. **Ask for help**: If you get stuck, your developer can help remotely via GitHub

---

## 📞 Next Steps

1. ✅ Confirm all text is accurate
2. ✅ Upload your real property images
3. ✅ Add your contact email to the footer
4. ✅ Deploy to Vercel (2-3 minutes)
5. ✅ Share your live URL with the world!

**Your website is production-ready. Enjoy!**
