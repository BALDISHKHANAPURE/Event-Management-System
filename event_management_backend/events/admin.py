from django.contrib import admin
from .models import TechnicalEvent, CulturalEvent, SportsEvent, EventRegister

# Custom admin for TechnicalEvent
class TechnicalEventAdmin(admin.ModelAdmin):
    list_display = ('name', 'start_date', 'end_date', 'location', 'created_by')
    list_filter = ('name',)  # Adds a filter for the 'name' field

# Custom admin for CulturalEvent
class CulturalEventAdmin(admin.ModelAdmin):
    list_display = ('name', 'start_date', 'end_date', 'location', 'created_by')
    list_filter = ('name',)  # Adds a filter for the 'name' field

# Custom admin for SportsEvent
class SportsEventAdmin(admin.ModelAdmin):
    list_display = ('name', 'start_date', 'end_date', 'location', 'created_by')
    list_filter = ('name',)  # Adds a filter for the 'name' field

# Custom admin for EventRegister
class EventRegisterAdmin(admin.ModelAdmin):
    # Fields to display in the admin list view
    list_display = ('name', 'roll_number', 'event', 'registration_date')

    # Filters to allow filtering by event
    list_filter = ('event', 'registration_date')

    # Search functionality for name and roll number
    search_fields = ('name', 'roll_number')

    # Optional: Customize ordering (e.g., most recent first)
    ordering = ('-registration_date',)

# Register models with their custom admin classes
admin.site.register(TechnicalEvent, TechnicalEventAdmin)
admin.site.register(CulturalEvent, CulturalEventAdmin)
admin.site.register(SportsEvent, SportsEventAdmin)
admin.site.register(EventRegister, EventRegisterAdmin)