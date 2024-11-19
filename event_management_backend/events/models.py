from django.db import models

# 1. Technical Event Model
class TechnicalEvent(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    location = models.CharField(max_length=255)
    created_by = models.ForeignKey('auth.User', on_delete=models.CASCADE)  # Admin who created the event

    def __str__(self):
        return self.name

# 2. Cultural Event Model
class CulturalEvent(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    location = models.CharField(max_length=255)
    created_by = models.ForeignKey('auth.User', on_delete=models.CASCADE)  # Admin who created the event

    def __str__(self):
        return self.name
    
#   3. SportsEvent
class SportsEvent(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    location = models.CharField(max_length=255)
    created_by = models.ForeignKey('auth.User', on_delete=models.CASCADE)  # Admin who created the event

    def __str__(self):
        return self.name

# 4. Event Registration Model (for both Technical and Cultural Events)
class EventRegister(models.Model):
    # User information
    name = models.CharField(max_length=100)
    roll_number = models.CharField(max_length=50)

    # One event field to hold either a technical or cultural event
    event = models.CharField(max_length=255)  # Will store the event name (either technical or cultural)

    # Timestamp for when the registration is made
    registration_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.event}"
