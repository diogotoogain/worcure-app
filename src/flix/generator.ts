// FLIX Module Generator Configuration
// This file defines the structure for 720 FLIX modules across 12 categories

export interface FlixModuleConfig {
  id: string;
  name: string;
  category: string;
  description: string;
  duration?: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export const flixCategories = [
  'foundation',
  'health-tracking',
  'fitness',
  'nutrition',
  'mental-wellness',
  'sleep',
  'social',
  'gamification',
  'analytics',
  'education',
  'integration',
  'premium'
] as const;

export const flixModuleTemplates: Record<string, string[]> = {
  foundation: [
    'Getting Started', 'Profile Setup', 'Basic Navigation', 'Settings Configuration', 'Privacy Setup',
    'Account Security', 'Notification Preferences', 'Dashboard Overview', 'Quick Start Guide', 'App Tour',
    'First Steps', 'Welcome Video', 'Account Creation', 'Profile Photo', 'Bio Setup',
    'Contact Info', 'Emergency Contacts', 'Health Profile', 'Fitness Level', 'Goals Setup',
    'Preferences', 'Theme Selection', 'Language', 'Timezone', 'Units',
    'Measurements', 'Sync Setup', 'Backup Config', 'Export Data', 'Import Data',
    'App Updates', 'Help Center', 'FAQ', 'Support', 'Feedback',
    'Bug Report', 'Feature Request', 'About Us', 'Version Info', 'Credits',
    'Legal', 'Terms', 'Privacy Policy', 'Cookie Policy', 'GDPR',
    'Data Rights', 'Consent', 'Opt-out', 'Delete Account', 'Deactivate',
    'Reactivate', 'Recovery', 'Password Reset', 'Email Verify', 'Phone Verify',
    'Two-Factor Auth', 'Biometric', 'PIN Setup', 'Security Questions', 'Session Management'
  ],
  'health-tracking': [
    'Weight Log', 'BMI Calculator', 'Body Measurements', 'Body Fat %', 'Muscle Mass',
    'Water Weight', 'Bone Density', 'Blood Pressure', 'Heart Rate', 'Resting HR',
    'Heart Rate Zones', 'Blood Sugar', 'Cholesterol', 'Temperature', 'Oxygen Saturation',
    'Respiration Rate', 'Energy Levels', 'Symptoms Log', 'Pain Tracker', 'Medication Log',
    'Supplement Log', 'Vitamin Intake', 'Hydration', 'Steps Counter', 'Distance',
    'Calories Burned', 'Active Minutes', 'Floors Climbed', 'VO2 Max', 'Recovery Time',
    'Stress Level', 'Fatigue', 'Digestion', 'Skin Health', 'Hair Health',
    'Nail Health', 'Eye Health', 'Dental Health', 'Immune System', 'Allergies',
    'Lab Results', 'Medical Records', 'Appointments', 'Prescriptions', 'Immunizations',
    'Health History', 'Family History', 'Risk Assessment', 'Health Score', 'Wellness Index',
    'Vitals Dashboard', 'Health Trends', 'Anomaly Detection', 'Health Alerts', 'Emergency Info',
    'Medical ID', 'Insurance Info', 'Doctor Contacts', 'Pharmacy Info', 'Hospital Locations'
  ],
  fitness: [
    'Workout Log', 'Strength Training', 'Cardio', 'HIIT', 'CrossFit',
    'Yoga', 'Pilates', 'Stretching', 'Mobility', 'Balance',
    'Core Exercises', 'Upper Body', 'Lower Body', 'Full Body', 'Isolation',
    'Compound', 'Bodyweight', 'Weights', 'Resistance Bands', 'Kettlebell',
    'Running', 'Cycling', 'Swimming', 'Rowing', 'Elliptical',
    'Walking', 'Hiking', 'Dancing', 'Sports', 'Martial Arts',
    'Boxing', 'Kickboxing', 'Zumba', 'Aerobics', 'Step',
    'Spin Class', 'Boot Camp', 'Circuit Training', 'Tabata', 'Interval',
    'Endurance', 'Speed', 'Agility', 'Power', 'Flexibility',
    'Recovery Workouts', 'Active Rest', 'Warm-up', 'Cool-down', 'Foam Rolling',
    'Exercise Library', 'Video Tutorials', 'Form Guide', 'Technique Tips', 'Common Mistakes',
    'Workout Plans', 'Training Programs', 'Progressive Overload', 'Periodization', 'Deload'
  ],
  nutrition: [
    'Meal Log', 'Calorie Tracking', 'Macro Calculator', 'Micro Nutrients', 'Water Intake',
    'Meal Planning', 'Recipe Builder', 'Grocery List', 'Food Database', 'Barcode Scanner',
    'Restaurant Guide', 'Fast Food', 'Healthy Options', 'Portion Control', 'Serving Sizes',
    'Meal Timing', 'Intermittent Fasting', 'Meal Frequency', 'Pre-Workout', 'Post-Workout',
    'Breakfast Ideas', 'Lunch Ideas', 'Dinner Ideas', 'Snack Ideas', 'Smoothies',
    'Salads', 'Protein Sources', 'Carb Sources', 'Fat Sources', 'Fiber Foods',
    'Vegetarian', 'Vegan', 'Paleo', 'Keto', 'Low-Carb',
    'Mediterranean', 'DASH Diet', 'Whole30', 'Clean Eating', 'Organic',
    'Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Sugar-Free', 'Low-Sodium',
    'Heart Healthy', 'Diabetic Friendly', 'Weight Loss', 'Muscle Gain', 'Maintenance',
    'Food Allergies', 'Intolerances', 'Sensitivities', 'Elimination Diet', 'Food Diary',
    'Nutrition Score', 'Eating Patterns', 'Mindful Eating', 'Emotional Eating', 'Binge Prevention'
  ],
  'mental-wellness': [
    'Mood Journal', 'Mood Tracker', 'Emotion Log', 'Stress Management', 'Anxiety Relief',
    'Meditation Guide', 'Breathing Exercises', 'Mindfulness', 'Relaxation', 'Calm Space',
    'Guided Meditation', 'Body Scan', 'Progressive Muscle', 'Visualization', 'Affirmations',
    'Gratitude Journal', 'Positive Thinking', 'Self-Compassion', 'Self-Care', 'Me Time',
    'Mental Health Check', 'Depression Screen', 'Anxiety Test', 'Stress Test', 'Burnout Check',
    'Therapy Resources', 'Counseling', 'Crisis Support', 'Hotlines', 'Emergency Contacts',
    'Cognitive Exercises', 'Memory Games', 'Brain Training', 'Focus Techniques', 'Concentration',
    'Time Management', 'Productivity', 'Work-Life Balance', 'Boundary Setting', 'Saying No',
    'Relationship Health', 'Communication', 'Conflict Resolution', 'Forgiveness', 'Letting Go',
    'Coping Strategies', 'Resilience', 'Growth Mindset', 'Reframing', 'Perspective',
    'Triggers', 'Warning Signs', 'Safety Plan', 'Crisis Management', 'Support System',
    'Self-Esteem', 'Confidence', 'Body Image', 'Identity', 'Purpose'
  ],
  sleep: [
    'Sleep Log', 'Bedtime Routine', 'Wake Time', 'Sleep Duration', 'Sleep Quality',
    'Sleep Stages', 'REM Sleep', 'Deep Sleep', 'Light Sleep', 'Awake Time',
    'Sleep Efficiency', 'Sleep Score', 'Sleep Debt', 'Recovery', 'Rest Days',
    'Insomnia Help', 'Sleep Hygiene', 'Bedroom Setup', 'Temperature', 'Darkness',
    'Noise Control', 'Comfort', 'Mattress Guide', 'Pillow Guide', 'Bedding',
    'Pre-Sleep Routine', 'Wind Down', 'Relaxation', 'Reading', 'Bath',
    'Sleep Stories', 'Lullabies', 'White Noise', 'Nature Sounds', 'ASMR',
    'Nap Planning', 'Power Naps', 'Recovery Naps', 'Nap Duration', 'Nap Timing',
    'Circadian Rhythm', 'Sleep Schedule', 'Consistency', 'Weekend Sleep', 'Jet Lag',
    'Shift Work', 'Night Shifts', 'Sleep Banking', 'Catch-up Sleep', 'Sleep Restriction',
    'Sleep Apnea', 'Snoring', 'Restless Legs', 'Sleep Walking', 'Night Terrors',
    'Dreams', 'Nightmares', 'Dream Journal', 'Lucid Dreaming', 'Sleep Meditation'
  ],
  social: [
    'Profile View', 'Edit Profile', 'Privacy Settings', 'Block Users', 'Report',
    'Friend Requests', 'Following', 'Followers', 'Friend List', 'Connections',
    'Activity Feed', 'Posts', 'Comments', 'Likes', 'Shares',
    'Direct Messages', 'Group Chat', 'Notifications', 'Mentions', 'Tags',
    'Groups', 'Communities', 'Teams', 'Clubs', 'Challenges',
    'Leaderboards', 'Rankings', 'Competitions', 'Tournaments', 'Events',
    'Join Events', 'Create Events', 'Event Calendar', 'RSVP', 'Event Chat',
    'Success Stories', 'Testimonials', 'Before/After', 'Progress Pics', 'Milestones',
    'Achievements', 'Badges', 'Trophies', 'Awards', 'Certificates',
    'Accountability', 'Buddy System', 'Mentor Match', 'Support Groups', 'Motivation',
    'Social Feed', 'Trending', 'Popular', 'Featured', 'Recommended',
    'Discovery', 'Search Users', 'Find Friends', 'Invite', 'Referral'
  ],
  gamification: [
    'Points System', 'Experience Points', 'Level Up', 'Ranking', 'Tiers',
    'Achievements', 'Badges', 'Rewards', 'Prizes', 'Incentives',
    'Daily Quests', 'Weekly Challenges', 'Monthly Goals', 'Streaks', 'Consistency',
    'Missions', 'Campaigns', 'Adventures', 'Journeys', 'Paths',
    'Leaderboards', 'Global Ranking', 'Local Ranking', 'Friend Ranking', 'Team Ranking',
    'Competitions', 'Tournaments', 'Battles', 'Duels', 'Showdowns',
    'Team Challenges', 'Group Quests', 'Collaborative Goals', 'Team Points', 'Squad',
    'Power-ups', 'Boosters', 'Multipliers', 'Bonuses', 'Special Items',
    'Unlockables', 'Hidden Features', 'Secret Levels', 'Easter Eggs', 'Special Access',
    'Virtual Currency', 'Coins', 'Gems', 'Credits', 'Tokens',
    'Shop', 'Marketplace', 'Purchase', 'Trade', 'Exchange',
    'Avatar Customization', 'Themes', 'Skins', 'Accessories', 'Emotes'
  ],
  analytics: [
    'Dashboard Overview', 'Key Metrics', 'Quick Stats', 'Summary View', 'At a Glance',
    'Trends Analysis', 'Weekly Trends', 'Monthly Trends', 'Yearly Trends', 'Historical',
    'Progress Charts', 'Line Graphs', 'Bar Charts', 'Pie Charts', 'Heat Maps',
    'Comparisons', 'Before/After', 'Goal vs Actual', 'Expected vs Real', 'Benchmarks',
    'Performance Metrics', 'Efficiency', 'Consistency', 'Improvement Rate', 'Growth',
    'Custom Reports', 'Export Data', 'PDF Reports', 'CSV Export', 'Share Reports',
    'Insights', 'Patterns', 'Correlations', 'Anomalies', 'Predictions',
    'AI Analysis', 'Smart Suggestions', 'Personalized Insights', 'Recommendations', 'Next Steps',
    'Goal Progress', 'Milestone Tracking', 'Achievement Rate', 'Success Rate', 'Completion',
    'Health Score', 'Wellness Index', 'Fitness Level', 'Nutrition Grade', 'Sleep Score',
    'Activity Summary', 'Workout Stats', 'Nutrition Stats', 'Sleep Stats', 'Social Stats',
    'Time Analysis', 'Peak Times', 'Low Times', 'Optimal Windows', 'Scheduling'
  ],
  education: [
    'Content Library', 'Video Tutorials', 'Articles', 'Guides', 'eBooks',
    'Podcasts', 'Webinars', 'Workshops', 'Courses', 'Lessons',
    'Learning Paths', 'Beginner Guide', 'Intermediate', 'Advanced', 'Expert',
    'Topics', 'Categories', 'Search', 'Filters', 'Tags',
    'Favorites', 'Bookmarks', 'Watch Later', 'Reading List', 'Collections',
    'Wellness 101', 'Nutrition Basics', 'Fitness Fundamentals', 'Mental Health', 'Sleep Science',
    'Exercise Science', 'Sports Nutrition', 'Psychology', 'Physiology', 'Anatomy',
    'Expert Interviews', 'Q&A Sessions', 'Live Events', 'Ask Expert', 'Pro Tips',
    'Research Papers', 'Studies', 'Evidence-Based', 'Scientific', 'Clinical',
    'News Updates', 'Latest Research', 'Trends', 'Innovations', 'Breakthroughs',
    'Myth Busting', 'Facts vs Fiction', 'Common Myths', 'Misconceptions', 'Truth',
    'How-To Guides', 'Step-by-Step', 'Tutorials', 'DIY', 'Practical Tips'
  ],
  integration: [
    'Device Sync', 'Wearables', 'Fitness Trackers', 'Smart Watches', 'Smart Scales',
    'Apple Health', 'Google Fit', 'Samsung Health', 'Fitbit', 'Garmin',
    'Strava', 'MyFitnessPal', 'Lose It', 'Cronometer', 'Headspace',
    'Calm', 'Sleep Cycle', 'AutoSleep', 'Withings', 'Polar',
    'API Access', 'Developer Tools', 'Webhooks', 'Data Export', 'Import',
    'Third-Party Apps', 'Integrations', 'Connections', 'Linked Accounts', 'OAuth',
    'Calendar Sync', 'Google Calendar', 'Apple Calendar', 'Outlook', 'Schedule',
    'Email Integration', 'Notifications', 'Reminders', 'Alerts', 'Updates',
    'Social Media', 'Facebook', 'Instagram', 'Twitter', 'LinkedIn',
    'Cloud Backup', 'iCloud', 'Google Drive', 'Dropbox', 'OneDrive',
    'Smart Home', 'Alexa', 'Google Home', 'Siri', 'Voice Control',
    'IFTTT', 'Zapier', 'Automation', 'Workflows', 'Triggers'
  ],
  premium: [
    'Premium Overview', 'Membership Tiers', 'Benefits', 'Features', 'Upgrade',
    'Subscription Plans', 'Pricing', 'Payment Options', 'Billing', 'Invoices',
    'Trial Period', 'Free Trial', 'Money-Back', 'Satisfaction', 'Guarantee',
    'Exclusive Content', 'Premium Videos', 'Advanced Guides', 'Expert Content', 'VIP Access',
    'Priority Support', '24/7 Support', 'Dedicated Support', 'Fast Response', 'Phone Support',
    'Advanced Analytics', 'Deep Insights', 'Custom Reports', 'Detailed Stats', 'Predictions',
    'Personal Coaching', '1-on-1 Sessions', 'Custom Plans', 'Expert Guidance', 'Mentorship',
    'Custom Workouts', 'Personalized Plans', 'Adaptive Programs', 'AI Training', 'Smart Plans',
    'Meal Plans', 'Custom Nutrition', 'Dietitian Support', 'Recipe Creator', 'Meal Prep',
    'Family Account', 'Multi-User', 'Shared Access', 'Family Plan', 'Group Discount',
    'Ad-Free', 'No Ads', 'Clean Interface', 'Premium UI', 'Enhanced UX',
    'Early Access', 'Beta Features', 'New Features', 'Preview', 'Exclusive'
  ]
};

// Generate 60 modules per category
export function generateFlixModules(): FlixModuleConfig[] {
  const modules: FlixModuleConfig[] = [];
  
  flixCategories.forEach((category) => {
    const templates = flixModuleTemplates[category];
    
    templates.forEach((template, index) => {
      const moduleNumber = index + 1;
      modules.push({
        id: `${category}-${moduleNumber.toString().padStart(3, '0')}`,
        name: template,
        category,
        description: `${template} module for ${category.replace('-', ' ')} in WORCURE MEMBERS`,
        duration: Math.floor(Math.random() * 60) + 5, // 5-65 minutes
        difficulty: ['beginner', 'intermediate', 'advanced'][Math.floor(Math.random() * 3)] as any,
        tags: [category, template.toLowerCase().replace(/\s+/g, '-')]
      });
    });
  });
  
  return modules;
}

export default generateFlixModules;
