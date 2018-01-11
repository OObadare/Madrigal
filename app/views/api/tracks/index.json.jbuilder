# render the show partial
@tracks.each do |track|
  json.set! track.id do
    json.partial! "api/tracks/track", track: track
  end
end
