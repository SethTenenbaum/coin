from datetime import datetime, timedelta
def get_unix_timestamps_from_last_n(n):

    # Get the current year
    current_year = datetime.now().year
    current_month = datetime.now().month
    current_day = datetime.now().day
    # Create a new date object for January 15 of the current year
    date = datetime(current_year-3, 1, 15)

    # Calculate an arbitrary number of days t add (365/23)
    days_to_add = 365 / 1000  # Use floating-point division to get fractional days

    # List to store the new dates for each iteration
    new_dates = []

    # Loop until final_date is greater than January 15 of the next year
    while True:
        
        new_dates.append(date)

        # Add the specific number of days to the date
        date = date + timedelta(days=days_to_add)
            # Store the result
        # Check if final_date is greater than January 15 of the next year
        if date > datetime(current_year, current_month, current_day):
            break
        

    # Display the new dates after adding the days
    for index, d in enumerate(new_dates[-2000:]):
        print(f"New date after adding {days_to_add:.2f} days: {d.strftime('%Y-%m-%d %H:%M:%S')}")        
        return [int(date.timestamp()) for date in new_dates[-n:]]
    