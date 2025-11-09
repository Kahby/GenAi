import { useState } from 'react';
import { Zap, Users, FolderOpen, Target, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import PrimaryButton from '../components/PrimaryButton';
import StatCard from '../components/StatCard';
import Speedometer from '../components/Speedometer';
import PageWrapper from '../components/PageWrapper';

const AdminDashboardPage = () => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [analysisAccuracy, setAnalysisAccuracy] = useState(78.2);

  // Mock data for bar chart
  const barChartData = [
    { name: 'Meme Generation', value: 85 },
    { name: 'AI Visual Art', value: 92 },
    { name: 'AI Digital Storytelling', value: 78 },
    { name: 'AI Song Factory', value: 65 },
    { name: 'AI-Generated Poetry', value: 70 },
  ];

  // Mock data for pie chart
  const pieChartData = [
    { name: 'AI Visual Art', value: 30 },
    { name: 'AI Digital Storytelling', value: 25 },
    { name: 'Meme Generation', value: 20 },
    { name: 'AI Song Factory', value: 15 },
    { name: 'AI-Generated Poetry', value: 10 },
  ];

  const COLORS = ['#facc15', '#94a3b8', '#475569', '#1e293b', '#64748b'];

  const handleAnalysis = () => {
    // Simulate analysis
    setAnalysisAccuracy(78.2);
  };

  // Word cloud words (mock data)
  const wordCloudWords = [
    { word: 'STORYTELLING', size: 32 },
    { word: 'PROMPT', size: 28 },
    { word: 'MEMEY FACTORY', size: 24 },
    { word: 'ROBOT', size: 20 },
    { word: 'ART', size: 20 },
    { word: 'VISUAL', size: 18 },
    { word: 'GRAFITI', size: 16 },
    { word: 'POETRY', size: 16 },
    { word: 'FACTORY', size: 14 },
    { word: 'CYBERPUNK', size: 14 },
  ];

  return (
    <PageWrapper>
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Dashboard Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl font-bold text-white">Analytics Dashboard</h1>
            </div>
            <p className="text-gray-300">Real-time insights and statistics</p>
          </div>

          {/* Top Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <StatCard icon={Users} title="Total Team Registered :" value="47" />
            <StatCard icon={FolderOpen} title="Submitted teams:" value="40" />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Bar Chart */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h3 className="text-white font-bold text-xl mb-4">Average Score by Theme</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} angle={-45} textAnchor="end" height={100} />
                    <YAxis stroke="#9ca3af" label={{ value: 'Average Accuracy Score (in %)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                      labelStyle={{ color: '#facc15' }}
                    />
                    <Bar dataKey="value" fill="#facc15" radius={[8, 8, 0, 0]}>
                      {barChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#facc15" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h3 className="text-white font-bold text-xl mb-4">Theme Popularity</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Analyzer Card */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h3 className="text-white font-bold text-xl mb-4">Prompt Accuracy Analyzer</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Select a team</label>
                    <select
                      value={selectedTeam}
                      onChange={(e) => setSelectedTeam(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 appearance-none"
                    >
                      <option value="">e.g. Team 01</option>
                      <option value="team1">Team 01</option>
                      <option value="team2">Team 02</option>
                      <option value="team3">Team 03</option>
                      <option value="team4">Team 04</option>
                    </select>
                  </div>
                  <PrimaryButton onClick={handleAnalysis} className="w-full">
                    Start Analysis
                  </PrimaryButton>
                </div>
              </div>

              {/* Gauge Card */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <Speedometer accuracy={analysisAccuracy} />
                  <div className="mt-6 text-center">
                    <p className="text-white mb-2">Analysis Complete</p>
                    <p className="text-yellow-400 text-4xl font-bold">{analysisAccuracy}%</p>
                  </div>
                </div>
              </div>

              {/* Word Cloud Card */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h3 className="text-white font-bold text-xl mb-4">Word Cloud</h3>
                <div className="flex flex-wrap gap-3 justify-center items-center min-h-[200px]">
                  {wordCloudWords.map((item, index) => (
                    <span
                      key={index}
                      className="text-white"
                      style={{ fontSize: `${item.size}px`, fontWeight: 'bold' }}
                    >
                      {item.word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AdminDashboardPage;

