# Taylor Brookes Junior Front End Developer Tech Test

Thank you for giving me the opportunity to complete this task. Below is a readme document based on what I did to complete this task and why.

## General Overview

I did not use any frameworks or libraries for the main tasks as I wanted to showcase my skills without them. I have experience using multiple frameworks and libraries for front-end development throughout my personal and professional portfolio, which can be provided for reference if required.

This task was completed with a Mobile-First Approach. All elements and CSS stylings have been created for mobile view, and media queries have been included to account for desktop views. This is due to a mostly 50/50 split of mobile vs desktop users. It negates most issues with spacing, including whitespace, margins, font sizes etc, as well as tackling loading times at the base of development. Rather than going back to edit and potentially re-arrange elements of a page, the base design is already in place and translates better to desktop than desktop does to mobile. A Mobile-First Approach can also reduce the amount of code needed for styling, as you tend to add or replace styling for desktop rather than needing to remove it completely.

# Main Task

## Section

All my written code was kept within the section `id="app"` purely for this task. Usually, I would have split this into separate sections.

---

## Nav

The Nav was contained within the section for task based-reasons. I would usually place this in the header section. No classes or ids were used in this section because it was not necessary in this instance.

---

## Main Banner and Press Banner Images

Both of these banners had the images set as background images due to the ease of manipulation for background purposes such as `background-size`, `height` and `margin`. It's also more convenient to place an image this way when overlaying text.
For the purpose of this task, SEO has not been taken into account, so it is not as important to have the image within the HTML.

---

## Main Banner Text, About Text and Press Text

For the main banner and about text sections, I used one `p` tag and multiple `br` tags to create paragraph breaks. This is due to the text being one whole paragraph broken into separate lines rather than them being individual and unrelated lines of text. Styling can still be manipulated however, if more styling or emphasis was needed or if the lines of text were unrelated, or for SEO purposes, it would be more appropriate to place these in separate p tags.

The Press Text has been separated into different element tags due to the styling and formatting being different for each line of text.

---

## Collections

The collection sections were split into two to ease styling for desktop. The mobile images were used in this section due to the Mobile-First Approach. For a live site, I would want interchangeable images based on screen size.

I used an anchor tag to make the images and spans link to the particular collection as this (for me) always feels nicer when accessing a web page. As I used an anchor tag, it was not appropriate to use another anchor tag or a button within it, so I styled a span instead to look and act like a button.

The images were not set as background images as in a live project, it would be beneficial for them to be individual elements for styling and potential SEO purposes.

The hover effects were added for improved user experience. (I also personally really like these effects. Slight change of text colour was added instead of underline as it looked better.)

---

# Bonus Tasks

I consulted the VueJS documentation and various tutorials to get a handle on VueJS for all of the bonus tasks, as I have no prior experience with this.

- One 
    - I used a VueJS `v-for` to place the contact details into the HTML. 

- Two
    - Below the page's main content, I have created two buttons; one to increment and one to decrement the number count based on button clicks. Below is a line of text displaying the number. I changed the styles of the buttons to match the design provided.

- Three
    - Added an if statement so that if the number is 0, the decrement button is hidden, and if the number is 10, the increment button is hidden. The number does not go below 0 or over 10 when both buttons are displayed. 

---

# Additional Points

### Links

I added links from the main Regatta site to make the task page a "working" page. I left the link to the email address blank.

---

### Tests

My written code in both index.html and style.css passes the relevant HTML and CSS validation tests however, in the HTML there are warnings and errors for the written `v-for`, `@click` etc. I'm not too sure on how to resolve these at this time.

---

### Improvements

- Page content to be split into correct sections based on semantic HTML
- Streamline CSS, namely the banner background image responsive positions
- ~~Collections blocks to be in one container and images to change from mobile to desktop and vice versa dependant on screen size~~ 
    - Decided to do this one as it didn't take too much time and looks cleaner code wise

---

### Commits

I usually complete more commits based on individual changes or completed sections, however I got carried away and completed the majority of the work without committing, hence my low commit number.

---