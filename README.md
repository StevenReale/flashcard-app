# Flashcard App

## Road Map

### Completed

- Sketch and build PostgreSQL database                                                                                       
- Initial frontend development and styling                                                                                    
- Build and test backend infrastructure (DAO, Service, Controller) for creating a new card                                    
- Wire front-end create card request to backend                                                                               
- Build full-stack functionality for displaying all cards in admin mode                                                       
- Styling admin interface                                                                                                     
- Build simple frontend interface and back-end functionality for displaying either the next card or an informational message. 
- Styling the flashcards in study mode                                                                                        
- Build and debug fullstack logic to log a correct card                                                                       
- Wire backend logic to handle incorrect answer                                                                               
- Parse time remaining on deck management page                                                                                
- Divide deck management page into an active and an inactive table                                                            
- Configure and launch on live server                                                                                         
- Add full CRUD capabilities to admin page                                                                                    
- Develop mobile view                                                                                                         
- UI improvements and code cleanup                                                                                            
- Create a datastore for dummy data with which unregistered users can demo the app's functionality
- Implemented functionality for multiple users
- Added authentication using Spring Security

### Potential next steps
- Refine code
   - Handle authentication errors
   - Move all card logic to frontend to eliminate redundancy (currently, dummy data logic handled on frontend; database logic handled on backend)
- Sort admin view by various columns
- Automated testing (JUnit and Mockito)
