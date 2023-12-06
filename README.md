# LH-Memorial

Louis-Hunter Kean memorial site
LouisKean.com
Site will be more of a celebration of his life rather than mourning his death.

Login Page - has a simple input field that requires you to enter the word “hunter” to access the home page. It will read “to enter, what is Louie’s full first
name, Louis-“ “
(My plan was to loop a video of him dancing into the Login Page, I'll include this file in the assets folder because I'm not sure how to have a repeating video
as a background and a GIF is usually low res, if it's something that takes more than a few minutes don't sweat it)

Fixed Header - Links to Pages, Home, Condolences, Memories, Photos, Videos in header

Home page - I'll just do like a bio/photo in the body

Condolences Page – List condolences with associated name, add Input field for condolences, input field for name

Memories – Similar to condolences page, but adjust input field for “Memory”

Photo’s – allow user to upload photo’s, mandatory input field of “uploaded by” optional input field “caption”. Arrange clickable thumbnails of photos. Once user
clicks on thumbnail, displays full photo with caption and uploaded by, allows user to cycle through full size photos. Preferably automatically scale file size
to 2.1MB max if it is larger.

Videos – Allow users to add youtube links. Mandatory Input fields when user uploads; approx. year of video, uploaded by. Display videos in grid format, 2
across. Sort videos by chronological order, most recent being the highest.

Please use your judgement if unsure.

# Setup

1. Create a Cloudflare account, and add a site. You will need to update the nameservers on your domain to point to Cloudflare.
2. In the Cloudflare dashboard, go to the "R2" Overview section on the left, and click `Create bucket`.
3. Enter `memorialBucket` as the name for your bucket, and finish creating it.
4. From within WSL (or other Linux environment), run `npm run pages:deploy` to deploy the site to Cloudflare, using the `memorialBucket` bucket.
5. In the Cloudflare dashboard, go to the `Workers & Pages` section on the left, and pick your page from the list.
6. Go to Settings -> Functions -> R2 bucket bindings, and add a binding for the `memorialBucket` bucket on both the Production and Preview environments. (See
   the tab just to the left of `Edit bindings`)
<!-- --project-name=lh-memorial -->
# Development

1. Run `npm run dev:linux` to start the development server, and Cloudflare binding proxy
2. Open the provided URL in your browser, and start editing files. The site will automatically reload when you save changes.
3. When you are ready to deploy, run `npm run pages:deploy` to deploy the site to Cloudflare.
