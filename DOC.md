# Taylor Brookes Junior Front End Developer Tech Test

Thank you for giving me the opportunity to complete this task. Below is a readme document based on what I did to complete this task, and why.

## General Overview

I did not use any frameworks or libraries for this task as I wanted to showcase my skills without them. I have experience using multiple frameworks and libraries throughout my personal and professional portfolio, which can be provided for reference if required.

This task was completed with a Mobile-First Approach. All elements and CSS stylings have been created for mobile view, and media queries have been included to account for desktop views. This is due to there being a mostly 50/50 split of mobile vs desktop users. It negates most issues with spacing, including whitespace, margins, font sizes etc, as well as tackling loading times at the base of development. Rather than going back to edit and potentially re-arrange elements of a page, the base design is already in place and translates better to desktop than desktop does to mobile. A Mobile-First Approach can also reduce the amount of code needed for styling, as you tend to add or replace styling for desktop rather than needing to remove it completely.

---

## Section

All of my written code was kept within the section id "app" purely for this task. Usually, I would have split this into separate sections.

---

## Nav

The Nav was contained within the section for task based-reasons. I would usually place this in the header section. No classes or ids were used in this section due to it not being necessary in this instance.

---

## Main Banner and Press Banner Images

Both of these banners had the images set as background images due to the ease of manipulation for background purposes such as background-size, height and margins. It's also more convenient to place an image this way when overlaying text.
For the purpose of this task, SEO has not been taken into account, so it is not as important to have the image within the HTML.

---

## Main Banner Text, About Text and Press Text

For all of these text sections, I used one p tag and multiple br tags to create breaks in the paragraphs. This is due to the text being one whole paragraph broken into separate lines rather than them being individual and unrelated lines of text. Styling can still be manipulated however, if more styling or emphasis was needed or if the lines of text were unrelated, or for SEO purposes, it would be more appropriate to place these in separate p tags.

The Press Text has been separated into different element tags due to the styling and formatting being different for each line of text.

---

## Collections

The collection sections were split into two to ease styling for desktop. The mobile images were used in this section due to the Mobile-First Approach. For a live site, I would want interchangeable images based on screen size.

I used an anchor tag to make the images and spans link to the particular collection as this (for me) always feels nicer when accessing a web page. As I used an anchor tag, it was not appropriate to use another anchor tag or a button within it, so I styled a span instead to look and act like a button.

The images were not set as background images as in a live project, it would be beneficial for them to be individual elements for styling and SEO purposes.

The hover effects were added for improved user experience. (I also personally really like these effects. Slight change of text colour was added instead of underline as it looked better.)

---

### Tests

My written code in both index.html and style.css pass the relevant validation tests. 

---

### Improvements

- Page content to be split into correct sections based on semantic HTML
- Streamline CSS, namely the banner background image responsive positions
- Collections blocks to be in one container and images to change from mobile to desktop and vice versa dependant on screen size

---

### Commits

I usually complete more commits based on individual changes or completed sections, however I got carried away and completed the majority of the work without committing. 

---