from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import CulturalEvent, TechnicalEvent, SportsEvent
from django.core import serializers

# A simple default view to test if the app is working

def events_default(request):
    return HttpResponse("Hello, welcome to the Event Management System")

# View to list all Cultural Events
def list_cultural_events(request):
    if request.method == 'GET':
        cultural_events = CulturalEvent.objects.all()
        events_data = serializers.serialize('json', cultural_events)
        return JsonResponse(events_data, safe=False)

# View to list all Technical Events
def list_technical_events(request):
    if request.method == 'GET':
        technical_events = TechnicalEvent.objects.all()
        events_data = serializers.serialize('json', technical_events)
        return JsonResponse(events_data, safe=False)
    
# View to list all Sports Events
def list_sports_events(request):
    if request.method == 'GET':
        sports_events = SportsEvent.objects.all()
        events_data = serializers.serialize('json', sports_events)
        return JsonResponse(events_data, safe=False)


from django.views.decorators.csrf import csrf_exempt
import json
from .models import EventRegister

@csrf_exempt
def register_event(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            name = data.get('name')
            roll_number = data.get('roll_number')
            event_id = data.get('event')

            # Determine if it's a technical or cultural event and fetch the name
            try:
                if 'Technical' in event_id:
                    event_name = TechnicalEvent.objects.get(id=event_id.split('_')[1]).name
                elif 'Cultural' in event_id:
                    event_name = CulturalEvent.objects.get(id=event_id.split('_')[1]).name
                elif 'Sports' in event_id:
                    event_name = SportsEvent.objects.get(id=event_id.split('_')[1]).name
                else:
                    return JsonResponse({'error': 'Invalid event selected'}, status=400)
                
                # Save the registration
                registration = EventRegister(name=name, roll_number=roll_number, event=event_name)
                registration.save()

                return JsonResponse({'message': 'Registration successful'}, status=201)
            
            except (TechnicalEvent.DoesNotExist, CulturalEvent.DoesNotExist, SportsEvent.DoesNotExist):
                return JsonResponse({'error': 'Event not found'}, status=404)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid data format'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
