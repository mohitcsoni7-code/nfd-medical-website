import { memo, useState } from 'react';
import { Linkedin, Facebook, ExternalLink, Calendar, Heart, MessageCircle, Share2, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface RecentUpdatesSectionProps {
  colors: any;
}

// Mock data for demonstration - in production this would come from API
const mockUpdates = [
  {
    id: '1',
    platform: 'linkedin',
    author: 'Dr. Sarah Chen, MD',
    authorTitle: 'Interventional Neurologist',
    hospitalName: 'Mumbai Neuro Institute',
    date: '2025-01-08T10:30:00Z',
    content: 'Successful treatment of complex basilar artery aneurysm using NFD\'s Polaris Aspiration Catheter. Patient showed excellent neurological recovery with minimal procedural complications. The precise control and aspiration efficiency made all the difference in this challenging case.',
    caseDetails: {
      procedure: 'Basilar Artery Aneurysm Coiling',
      device: 'Polaris Aspiration Catheter',
      outcome: 'Complete occlusion achieved',
      duration: '45 minutes'
    },
    engagement: {
      likes: 127,
      comments: 23,
      shares: 8,
      views: 1547
    },
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
    tags: ['Success Story', 'Complex Case', 'Polaris System']
  },
  {
    id: '2',
    platform: 'facebook',
    author: 'Dr. Michael Rodriguez',
    authorTitle: 'Chief of Neurosurgery',
    hospitalName: 'Barcelona Medical Center',
    date: '2025-01-07T14:15:00Z',
    content: 'Outstanding results with Terra Embolization Coils in treating multiple cerebral aneurysms. The biocompatibility and precise deployment characteristics of these coils continue to exceed expectations in our practice.',
    caseDetails: {
      procedure: 'Multiple Aneurysm Embolization',
      device: 'Terra Embolization Coils',
      outcome: 'All aneurysms successfully occluded',
      duration: '2.5 hours'
    },
    engagement: {
      likes: 89,
      comments: 15,
      shares: 12,
      views: 982
    },
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
    tags: ['Multiple Aneurysms', 'Terra Coils', 'European Case']
  },
  {
    id: '3',
    platform: 'linkedin',
    author: 'Dr. Priya Sharma, MD',
    authorTitle: 'Senior Interventional Radiologist',
    hospitalName: 'Delhi Heart & Brain Institute',
    date: '2025-01-06T09:45:00Z',
    content: 'Remarkable stroke intervention using Polaris Distal Access Catheter. The enhanced trackability and support allowed us to reach distal vessel segments that were previously challenging to access, resulting in successful recanalization and excellent patient outcome.',
    caseDetails: {
      procedure: 'Acute Stroke Thrombectomy',
      device: 'Polaris Distal Access Catheter',
      outcome: 'Complete recanalization (TICI 3)',
      duration: '32 minutes'
    },
    engagement: {
      likes: 156,
      comments: 31,
      shares: 18,
      views: 2103
    },
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    tags: ['Stroke Care', 'Polaris Catheter', 'Emergency Case']
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  } else if (diffInHours < 48) {
    return '1 day ago';
  } else {
    return `${Math.floor(diffInHours / 24)} days ago`;
  }
};

const formatNumber = (num: number) => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
};

const RecentUpdatesSection = memo(({ colors }: RecentUpdatesSectionProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState<'all' | 'linkedin' | 'facebook'>('all');

  const filteredUpdates = selectedPlatform === 'all' 
    ? mockUpdates 
    : mockUpdates.filter(update => update.platform === selectedPlatform);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl" style={{ color: colors.primary }}>Recent Updates</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.secondary }}>
              Stay updated with the latest patient case studies and success stories from healthcare professionals worldwide using NFD devices.
            </p>
          </div>

          {/* Platform Filter */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => setSelectedPlatform('all')}
              variant={selectedPlatform === 'all' ? 'default' : 'outline'}
              size="sm"
              className={`${selectedPlatform === 'all' ? '' : 'border-2'}`}
              style={selectedPlatform === 'all' ? { backgroundColor: colors.accent, color: 'white' } : { borderColor: colors.accent, color: colors.accent }}
            >
              All Updates
            </Button>
            <Button
              onClick={() => setSelectedPlatform('linkedin')}
              variant={selectedPlatform === 'linkedin' ? 'default' : 'outline'}
              size="sm"
              className={`flex items-center space-x-2 ${selectedPlatform === 'linkedin' ? '' : 'border-2'}`}
              style={selectedPlatform === 'linkedin' ? { backgroundColor: colors.accent, color: 'white' } : { borderColor: colors.accent, color: colors.accent }}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Button>
            <Button
              onClick={() => setSelectedPlatform('facebook')}
              variant={selectedPlatform === 'facebook' ? 'default' : 'outline'}
              size="sm"
              className={`flex items-center space-x-2 ${selectedPlatform === 'facebook' ? '' : 'border-2'}`}
              style={selectedPlatform === 'facebook' ? { backgroundColor: colors.accent, color: 'white' } : { borderColor: colors.accent, color: colors.accent }}
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </Button>
          </div>

          {/* Updates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredUpdates.map((update) => (
              <Card key={update.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2" style={{ borderColor: colors.border }}>
                <CardContent className="p-6 space-y-4">
                  {/* Post Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: update.platform === 'linkedin' ? '#0077B5' : '#1877F2' }}>
                        {update.platform === 'linkedin' ? (
                          <Linkedin className="w-5 h-5 text-white" />
                        ) : (
                          <Facebook className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm" style={{ color: colors.primary }}>{update.author}</h3>
                        <p className="text-xs" style={{ color: colors.secondary }}>{update.authorTitle}</p>
                        <p className="text-xs" style={{ color: colors.secondary }}>{update.hospitalName}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs" style={{ color: colors.secondary }}>
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(update.date)}</span>
                    </div>
                  </div>

                  {/* Post Image */}
                  {update.image && (
                    <div className="relative">
                      <img 
                        src={update.image} 
                        alt="Medical procedure case study"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="text-xs bg-white/90 backdrop-blur-sm">
                          Case Study
                        </Badge>
                      </div>
                    </div>
                  )}

                  {/* Post Content */}
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed" style={{ color: colors.secondary }}>
                      {update.content}
                    </p>

                    {/* Case Details */}
                    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                      <h4 className="text-xs uppercase tracking-wide" style={{ color: colors.primary }}>Case Details</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        <div><span className="font-medium">Procedure:</span> {update.caseDetails.procedure}</div>
                        <div><span className="font-medium">Device:</span> <span style={{ color: colors.accent }}>{update.caseDetails.device}</span></div>
                        <div><span className="font-medium">Outcome:</span> {update.caseDetails.outcome}</div>
                        <div><span className="font-medium">Duration:</span> {update.caseDetails.duration}</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {update.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs" style={{ borderColor: colors.accent, color: colors.accent }}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: colors.border }}>
                    <div className="flex items-center space-x-4 text-xs" style={{ color: colors.secondary }}>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{formatNumber(update.engagement.likes)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{update.engagement.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 className="w-3 h-3" />
                        <span>{update.engagement.shares}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs" style={{ color: colors.secondary }}>
                      <Eye className="w-3 h-3" />
                      <span>{formatNumber(update.engagement.views)} views</span>
                    </div>
                  </div>

                  {/* View Original Post Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-2" 
                    style={{ borderColor: colors.accent, color: colors.accent }}
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Original Post
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4 mt-12">
            <p className="text-sm" style={{ color: colors.secondary }}>
              Follow us on social media for the latest updates and case studies
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 border-2"
                style={{ borderColor: '#0077B5', color: '#0077B5' }}
              >
                <Linkedin className="w-4 h-4" />
                <span>Follow on LinkedIn</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 border-2"
                style={{ borderColor: '#1877F2', color: '#1877F2' }}
              >
                <Facebook className="w-4 h-4" />
                <span>Follow on Facebook</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

RecentUpdatesSection.displayName = 'RecentUpdatesSection';

export default RecentUpdatesSection;