#### Overview
This React application provides a dynamic table interface with CRUD (Create, Read, Update, Delete) functionalities. The application fetches data from a remote JSON source, displays it in a table format, and allows users to edit or delete table entries through modals.

#### Key Features
1. **Data Fetching:** Automatically fetches data from a remote JSON source on component mount using the `useEffect` hook.
2. **Dynamic Table Rendering:** Displays the fetched data in a table with columns for Serial Number, Name, Age, City, and Pincode.
3. **Edit Functionality:** Users can edit the 'name' field of a table entry. This is done through a modal window.
4. **Delete Functionality:** Users can delete a table entry. A confirmation modal appears before deletion.
5. **Responsive Modals:** The application uses modals for editing and deletion confirmations, enhancing user interaction.

#### Technology Stack
- **React:** A JavaScript library for building user interfaces.
- **useState, useEffect Hooks:** For managing state and side effects in functional components.
- **CSS:** For styling components.

#### Getting Started
1. **Clone the Repository:** 
   ```
   git clone https://github.com/aryannov25/data-table.git
   ```
2. **Install Dependencies:**
   ```
   npm install
   ```
3. **Run the Application:**
   ```
   npm start
   ```

#### Components
- **App Component:** The main component that renders the table and handles data fetching and state management.
- **Modal Component:** A reusable modal component for editing and deletion confirmations.

#### Functions
- **fetchData:** Fetches data from the remote JSON source and updates the state.
- **handleEdit:** Opens the modal for editing a table entry.
- **handleDelete:** Opens the modal for confirming deletion.
- **closeModal, resetModalContent:** Functions to close the modal and reset its content.
- **submitModal:** Submits the changes in case of edit or proceeds with deletion.

#### Error Handling
The application has basic error handling for fetching data from the remote source. In case of an error, it logs an error message to the console.

