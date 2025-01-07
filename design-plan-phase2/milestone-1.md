# Project 3, Milestone 1: Design Journey

## Audience's Goals

1. Finding and accessing information easily as the audience sought out information (online maps, date & time information, physical signage) before and during the festival
2. Knowing how they should prepare for or handle potential challenges at the festival
3. Knowing information about specific vendors & performances (more transparency about available options, locations, schedules)
4. Exploring signature items or highly recommended foods
5. Accessing clear, easy-to-find information on transportation and on-site navigation


## Modal Interactivity Brainstorm

- A modal that opens an enlarged version of each image along with a short description in the signature items section to allow users to view the images more closely, enhancing their connection to the festival's atmosphere and must-try items before exploring food options
- Modals that organize images of each vendor section into a gallery to allow users to visually explore more abundant offerings in each vendor category, making it easier to discover and plan visits to certain vendor types
- A modal that opens an enlarged version of the TCAT fare website screenshot on the "Directions & Transportation" page to help users visualize beforehand information on bus fares after they click on the link to that website
- A modal that opens an enlarged version of each of the bus route image to help users closely view the images of the routes relevant to them without needing to go to the TCAT website


## Interactivity Design Ideation

![Modal iteration 1](modal-iteration-1.jpg)
![Modal iteration 2](modal-iteration-2.jpg)
![Hamburger iteration 1](hamburger-iteration-1.jpg)
![Hamburger iteration 2](hamburger-iteration-2.jpg)


## Final Interactivity Design Sketches

**Modal design sketches:**

![Modal design wide](modal-design-wide.jpg)
![Modal design narrow](modal-design-narrow.jpg)

**Hamburger drop-down navigation menu design sketches:**

![Hamburger design wide](hamburger-design-wide.jpg)
![Hamburger design narrow](hamburger-design-narrow.jpg)


## Interactivity Rationale

A hamburger menu is used to save screen space by keeping navigation options hidden until needed, allowing users to focus immediately on the essential information of the page that they come to find such as vendor offerings, performance schedules, transportation information, etc. A modal serves to enhance users' viewing experience by allowing them to clearly see enlarged images of signature food items. It helps them better connect with the festival's unique culinary offerings, providing users a sense of excitement before they explore food options on-site. The short description under the image in the modal also adds context to the signature item to help attendees feel informed, making it easier to imagine what the item is like and subsequently plan their food choices at the festival.


## Interactivity Planning Sketches

**Modal planning sketches:**

![Modal planning](modal-planning.jpg)

**Hamburger drop-down navigation menu planning sketches:**

![Hamburger planning](hamburger-planning.jpg)


## Interactivity Pseudocode Plan

**Modal pseudocode:**

> Pseudocode to open the modal:

```
when #donut-button is clicked (event):
  remove .hidden from #donut
when #apple-button is clicked (event):
  remove .hidden from #apple
when #cider-button is clicked (event):
  remove .hidden from #cider
```

> Pseudocode to close the modal:

```
when #donut-x is clicked (event):
  add .hidden to #donut
when #apple-x is clicked (event):
  add .hidden to #apple
when #cider-x is clicked (event):
  add .hidden to #cider
```

**Hamburger menu pseudocode:**

Pseudocode to show/hide (toggle) the navigation menu (narrow screens) when the hamburger button is clicked:

```
when #hamburger is clicked:
  if the navigation menu is not visible:
    remove .hidden from #menu
    add .hidden to #hamburger
    remove .hidden from #x-icon
  else:
    add .hidden to #menu
    add .hidden to #x-icon
    remove .hidden from #hamburger

when #x-icon is clicked:
  if the navigation menu is visible:
    add .hidden to #menu
    add .hidden to #x-icon
    remove .hidden from #hamburger
  else:
    remove .hidden from #menu
    remove .hidden from #x-icon
    add .hidden to #hamburger
```

If the browser window is narrow when the page loads, the hamburger button should be visible and the navigation should be hidden.
If the browser window is wide when the page loads, the hamburger menu should not be visible.
> Complete the pseudocode to show/hide (toggle) the navigation on page load:

```
on page load (ready):
  if window is narrow:
    remove .hidden from #hamburger
    add .hidden to #menu
  else if window is wide:
    add .hidden to #hamburger
    remove .hidden from #menu

```

If the browser window is resized from wide to narrow, the hamburger menu should become visible and the navigation should be hidden.
If the browser window is resized from narrow to wide, the hamburger menu should become hidden and the navigation should be visible.

```
on window resize:
  if window is narrow:
    remove .hidden from #hamburger
    add .hidden to #menu
  else if window is wide:
    add .hidden to #hamburger
    remove .hidden from #menu
```

## References

I used this website for information on bus routes: <https://tcatbus.com/bus-schedules>.

I used Canva to create some of my images.

[← Table of Contents](design-journey.md)
